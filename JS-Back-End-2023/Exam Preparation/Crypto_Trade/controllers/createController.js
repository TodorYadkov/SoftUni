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
        .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    body('imageUrl')
        .notEmpty().withMessage('Image is required').bail()
        .isURL().withMessage('Invalid URL')
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('Image must starts with http:// or https://'),
    body('price').notEmpty().withMessage('Price is required!').bail()
        .isNumeric().withMessage('Price must be a number!').bail()
        .custom((value) => value >= 0).withMessage('Price must be a positive number!'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
    body('payment')
        .notEmpty().withMessage('Payment is required').bail()
        .custom((value) => ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'].includes(value))
        .withMessage('payment is incorrect'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }
            const userId = res[userCookieName]._id;
            const newPub = await createData(userInput, userId);

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