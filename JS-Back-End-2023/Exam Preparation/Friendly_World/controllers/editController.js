const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getDataById, updateDataById } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');
const { userCookieName } = require('../config/environment.js');

editController.get('/:id', async (req, res) => {
    const animalId = req.params.id;
    try {
        const animalDetails = await getDataById(animalId).lean();
        // Check if the current user is owner
        if (animalDetails.owner != res[userCookieName]._id) {
            throw new Error(`${res[userCookieName].email} is not the owner`);
        }

        res.render('edit', {
            animalDetails,
            title: 'Edit Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/not-found');
    }
});

editController.post('/:id',
    body(['name', 'years', 'kind', 'imageUrl', 'need', 'location', 'description']).trim(),
    body('name')
        .notEmpty().withMessage('Name is required').bail()
        .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    body('years')
        .notEmpty().withMessage('The years is required').bail()
        .isInt({ min: 1, max: 100 }).withMessage('The years must  be a number between 1 and  100'),
    body('kind')
        .notEmpty().withMessage('Kind is required').bail()
        .isLength({ min: 3 }).withMessage('Kind must be at least 3 characters long'),
    body('imageUrl')
        .notEmpty().withMessage('The photo image is required').bail()
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('The photo image must starts with http:// or https://'),
    body('need')
        .notEmpty().withMessage('The need is required').bail()
        .isLength({ min: 3, max: 20 }).withMessage('The need must be at least 3 and no longer than 20 characters'),
    body('location')
        .notEmpty().withMessage('Location is required').bail()
        .isLength({ min: 5, max: 15 }).withMessage('Location must be at least 5 and no longer than 15 characters'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ min: 5, max: 50 }).withMessage('Description must be at least 5 and no longer than 50 characters'),
    async (req, res) => {
        const animalId = req.params.id;
        const animalDetails = Object.assign(req.body, { _id: animalId });
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            await updateDataById(animalId, animalDetails);
            res.redirect(`/details/${animalId}`);
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('edit', {
                animalDetails,
                title: 'Edit Page',
            });
        }
    });

module.exports = { editController };