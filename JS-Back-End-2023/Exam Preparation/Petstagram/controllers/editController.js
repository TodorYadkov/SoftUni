const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getDataById, updateDataById } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

editController.get('/:id', async (req, res) => {
    const photoId = req.params.id;
    try {
        const photoDetails = await getDataById(photoId).lean();

        res.render('edit', {
            photoDetails,
            title: 'Petstagram',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${photoId}`);
    }
});

editController.post('/:id',
    body(['name', 'age', 'description', 'location', 'imageUrl']).trim(),
    body('name')
        .notEmpty().withMessage('Name is required').bail()
        .isLength({ min: 2 }).withMessage(' must be at least 2 characters long'),
    body('age')
        .notEmpty().withMessage('Age is required').bail()
        .isInt({ min: 1, max: 100 }).withMessage('Age must be a number between 1 and 100'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ min: 5, max: 50 }).withMessage('Description must be between 5 and 50 characters long'),
    body('location')
        .notEmpty().withMessage('Location is required').bail()
        .isLength({ min: 5, max: 50 }).withMessage('Location must be between 5 and 50 characters long'),
    body('imageUrl')
        .notEmpty().withMessage('Link to image is required').bail()
        .isURL().withMessage('Invalid URL')
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('Link to image must starts with http:// or https://'),
    async (req, res) => {
        const photoId = req.params.id;
        const photoDetails = Object.assign(req.body, { _id: photoId });
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            await updateDataById(photoId, photoDetails);
            res.redirect(`/details/${photoId}`);
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('edit', {
                photoDetails,
                title: 'Petstagram',
            });
        }
    });

module.exports = { editController };