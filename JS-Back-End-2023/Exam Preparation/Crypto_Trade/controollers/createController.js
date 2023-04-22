const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { createData } = require('../services/dataService.js');
const { userCookieName } = require('../config/environment.js');

createController.get('/', (req, res) => {
    const userInput = {};
    res.render('create', {
        userInput,
        title: 'Create Page',
    });
});

createController.post('/',
    body(['name', 'imageUrl', 'price', 'description', 'payment']).trim(),
    body('name')
        .notEmpty().withMessage('Name is required').bail()
        .isLength({ min: 2 }).withMessage('The Name should be at least 2 characters'),
    body('imageUrl')
        .notEmpty().withMessage('Image is required').bail()
        .isURL().withMessage('Invalid URL. Must start with http:// or https://').bail()
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('The Crypto Image should start with http:// or https://'),
    body('price')
        .notEmpty().withMessage('Price is required').bail()
        .custom((value) => value > 0).withMessage('The Price should be a positive number'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ min: 10 }).withMessage('The Description should be a minimum of 10 characters long'),
    body('payment')
        .custom((value) => ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'].includes(value))
        .withMessage('The Payment Method must be one of the options'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const newOffer = await createData(userInput, res[userCookieName]._id);
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