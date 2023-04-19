const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { createHotel } = require('../services/dataService.js');
const { userCookieName } = require('../config/environment.js');

createController.get('/', (req, res) => {
    res.locals.loading = false;
    const userInput = {};
    res.render('create', { userInput });
});

createController.post('/',
    body(['hotelName', 'city', 'freeRooms', 'imageUrl']).trim(),
    body('hotelName').isLength({ min: 4 }).withMessage('The name should be at least 4 characters!'),
    body('city').isLength({ min: 3 }).withMessage('The city should be at least 3 characters long!'),
    body('imageUrl').matches(/^https?:\/\//g).withMessage('The imageUrl should starts with http:// or https://'),
    body('freeRooms').isInt({ min: 1, max: 100 }).withMessage('Free rooms must be between 1 and 100!'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const { hotelName, city, freeRooms, imageUrl } = userInput;
            await createHotel(res[userCookieName]._id, { hotelName, city, freeRooms, imageUrl });

            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('create', { userInput });
        }
    });

module.exports = { createController };