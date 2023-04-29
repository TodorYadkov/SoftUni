const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const errorHandler = require('../util/errorHandler');
const { userCookieName } = require('../config/environment');
const { createNewAd } = require('../services/dataService');

createController.get('/', (req, res) => {
    const userInput = {};
    res.render('create', {
        userInput,
        title: 'Create Page',
    });
});

createController.post('/',
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
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            const userId = res[userCookieName]._id;
            const newAd = await createNewAd(userInput, userId);
            res.redirect('/catalog');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('create', {
                userInput,
                title: 'Create Page',
            });
        }
    });

module.exports = { createController };