const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const errorHandler = require('../util/errorHandler.js');
const { createOffer } = require('../services/dataService.js');
const { userCookieName } = require('../config/environment.js');

createController.get('/', (req, res) => {
    const userInput = {};
    res.render('create', {
        userInput,
        title: 'Publish Auction',
    });
});

createController.post('/',
    body(['title', 'category', 'imageUrl', 'price', 'description']).trim(),
    body('title')
        .notEmpty().withMessage('Title is required').bail()
        .isLength({ min: 4 }).withMessage('Title must be at least 4 characters long'),
    body('category')
        .notEmpty().withMessage('Category is required')
        .custom((value) => ['estate', 'vehicles', 'furniture', 'electronics', 'other'].includes(value))
        .withMessage('Select the correct category'),
    body('imageUrl')
        .notEmpty().withMessage('Image is required'),
    body('price')
        .notEmpty().withMessage('Price is required').bail()
        .isNumeric().withMessage('Price must be a number').bail()
        .custom((value) => value > 0).withMessage('The price cannot be zero or less than zero'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ max: 200 }).withMessage('The description should be a maximum of 200 characters long'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const newOffer = await createOffer(res[userCookieName]._id, userInput);
            res.redirect('/catalog');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('create', {
                userInput,
                title: 'Publish Auction'
            });
        }
    });

module.exports = { createController };