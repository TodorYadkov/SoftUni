const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getDataById, updateDataById } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

editController.get('/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
        const itemDetails = await getDataById(itemId).lean();

        res.render('edit', {
            itemDetails,
            title: 'Edit Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${itemId}`);
    }
});

editController.post('/:id',
    body(['title', 'keyword', 'location', 'dateCreation', 'imageUrl', 'description']).trim(),
    body('title')
        .notEmpty().withMessage('Title is required').bail()
        .isLength({ min: 6 }).withMessage('Title must be at least 6 characters long'),
    body('keyword')
        .notEmpty().withMessage('Keyword is required').bail()
        .isLength({ min: 6 }).withMessage('Keyword must be at least 6 characters long'),
    body('location')
        .notEmpty().withMessage('Location is required').bail()
        .isLength({ max: 15 }).withMessage('Location must be a maximum of 15 characters long'),
    body('location')
        .notEmpty().withMessage('Location is required').bail()
        .isLength({ max: 15 }).withMessage('Location must be a maximum of 15 characters long'),
    body('dateCreation')
        .notEmpty().withMessage('Date of creation is required').bail()
        .isLength({ min: 10, max: 10 }).withMessage('Date muast be exactly 10 characters long')
        .custom((value) => /^\d{2}\.\d{2}\.\d{4}$/g.test(value)).withMessage('Date of creation must be in the following format: 00.00.0000'),
    body('imageUrl')
        .notEmpty().withMessage('Wildlife image is required').bail()
        .isURL().withMessage('Invalid URL')
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('Wildlife image must starts with http:// or https://'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ min: 8 }).withMessage('Description must be at least 8 characters long'),
    async (req, res) => {
        const itemId = req.params.id;
        const itemDetails = Object.assign(req.body, { _id: itemId });
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            await updateDataById(itemId, itemDetails);
            res.redirect(`/details/${itemId}`);
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('edit', {
                itemDetails,
                title: 'Edit Page',
            });
        }
    });

module.exports = { editController };