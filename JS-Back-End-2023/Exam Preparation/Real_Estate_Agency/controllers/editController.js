const editControler = require('express').Router();
const { body, validationResult } = require('express-validator');
const errorHandler = require('../util/errorHandler');
const { updateOffer, getOfferById } = require('../services/dataService');

editControler.get('/:id', async (req, res) => {
    const offerId = req.params.id;
    try {
        const userInput = await getOfferById(offerId).lean();
        res.render('edit', {
            userInput,
            title: 'Edit Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${offerId}`);
    }
});

editControler.post('/:id',
    body(['name', 'type', 'year', 'city', 'imageHome', 'description', 'availablePieces']).trim(),
    body('name')
        .notEmpty().withMessage('Name is required').bail()
        .isLength({ min: 6 }).withMessage('Name must be at least 6 characters long'),
    body('type').notEmpty().withMessage('Property Type is required'),
    body('year')
        .notEmpty().withMessage('Year Built is required').bail()
        .custom((value) => value >= 1850 && value <= 2021).withMessage('Year must be between 1850 and 2021'),
    body('imageHome')
        .notEmpty().withMessage('Home image is required').bail()
        .isURL().withMessage('Invalid URL')
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('Home image must starts with http:// or https://'),
    body('description')
        .notEmpty().withMessage('Property Description is required ').bail()
        .isLength({ max: 60 }).withMessage('Property description must be at maximum 60 characters long'),
    body('availablePieces')
        .notEmpty().withMessage('Available pieces is required').bail()
        .isInt({ min: 0, max: 10 }).withMessage('Available Pieces should be positive number (from 0 to 10)'),
    async (req, res) => {
        const offerId = req.params.id;
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            await updateOffer(offerId, userInput);
            res.redirect(`/details/${offerId}`);
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            userInput._id = offerId;
            res.render('edit', {
                userInput,
                title: 'Edit Page',
            });
        }
    });

module.exports = { editControler };