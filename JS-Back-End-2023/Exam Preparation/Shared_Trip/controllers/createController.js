const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler');
const { createTrip } = require('../services/dataService');
const { userCookieName } = require('../config/environment');

createController.get('/', (req, res) => {
    const userInput = {};
    res.render('create', {
        userInput,
        title: 'Offer Trip',
    });
});

createController.post('/',
    body(['startPoint', 'endPoint', 'date', 'time', 'carImage', 'carBrand', 'seats', 'price', 'description']).trim(),
    body('startPoint')
        .notEmpty().withMessage('Start point is required').bail()
        .isLength({ min: 4 }).withMessage('Start point must be at least 4 characters long'),
    body('endPoint')
        .notEmpty().withMessage('End point is required').bail()
        .isLength({ min: 4 }).withMessage('End point must be at least 4 characters long'),
    body('date')
        .notEmpty().withMessage('Date is required')
        .isDate().withMessage('Invalid date'),
    body('time')
        .notEmpty().withMessage('Time is required')
        .isTime().withMessage('Invalid time'),
    body('carImage')
        .notEmpty().withMessage('Car Image').bail()
        .isURL().withMessage('Invalid URL')
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('The URL image must start with http:// or https://'),
    body('carBrand')
        .notEmpty().withMessage('Car Brand is required').bail()
        .isLength({ min: 4 }).withMessage('Car brand must be at least 4 characters long'),
    body('seats')
        .notEmpty().withMessage('Available Seats').bail()
        .isNumeric().withMessage('Available seats must be a number'),
    body('price')
        .notEmpty().withMessage('Price is required').bail()
        .isInt({ min: 1, max: 50 }).withMessage('The price must be between 1 and 50'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }
            const userId = res[userCookieName]._id;
            const newTrip = await createTrip(userInput, userId);
            res.redirect('/share-trips');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('create', {
                userInput,
                title: 'Offer Trip',
            });
        }
    });

module.exports = { createController };