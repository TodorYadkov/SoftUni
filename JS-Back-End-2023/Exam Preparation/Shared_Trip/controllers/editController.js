const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getTripById, updateTrip } = require('../services/dataService');
const { errorHandler } = require('../util/errorHandler');


editController.get('/:id', async (req, res) => {
    const tripId = req.params.id;
    try {
        const tripDetails = await getTripById(tripId).lean();
        const userInput = tripDetails;
        res.render('edit', {
            userInput,
            title: 'Edit Trip',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${tripId}`);
    }
});

editController.post('/:id',
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
        const tripId = req.params.id;
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            await updateTrip(tripId, userInput);
            res.redirect(`/details/${tripId}`);
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            userInput._id = tripId;
            res.render('edit', {
                userInput,
                title: 'Edit Trip',
            });
        }
    });

module.exports = { editController };