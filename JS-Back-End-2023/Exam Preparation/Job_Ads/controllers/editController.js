const editController = require('express').Router();
const { getAdById, updateAd } = require('../services/dataService');
const { body, validationResult } = require('express-validator');
const errorHandler = require('../util/errorHandler');

editController.get('/:id', async (req, res) => {
    const userInput = await getAdById(req.params.id).lean();
    res.render('edit', {
        userInput,
        title: 'Edit Page',
    });
});

editController.post('/:id',
    body(['headline', 'location', 'companyName', 'companyDescription']).trim(),
    body('headline')
        .notEmpty().withMessage('Headline is required').bail()
        .isLength({ min: 4 }).withMessage('Headline must be at least 4 characters long'),
    body('location')
        .notEmpty().withMessage('Location is required').bail()
        .isLength({ min: 8 }).withMessage('Location must be at least 8 characters long'),
    body('companyName')
        .notEmpty().withMessage('Company Name is required').bail()
        .isLength({ min: 3 }).withMessage('Company Name must be at least 3 characters long'),
    body('companyDescription')
        .notEmpty().withMessage('Company Description is required').bail()
        .isLength({ max: 40 }).withMessage('Company Description must be maximum 40 characters long'),
    async (req, res) => {
        const userInput = req.body;
        const adId = req.params.id;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            const editedAd = await updateAd(adId, userInput);
            res.redirect(`/details/${adId}`);
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            userInput._id = adId;
            res.render('edit', {
                userInput,
                title: 'Edit Page',
            });
        }
    });

module.exports = { editController };