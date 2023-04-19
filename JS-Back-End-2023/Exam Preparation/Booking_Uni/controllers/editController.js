const { getHotelById, updateHotelById } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');
const { body, validationResult } = require('express-validator');

const editController = require('express').Router();

editController.get('/:id', async (req, res) => {
    res.locals.loading = false;
    try {
        const hotelId = req.params.id;
        const hotelDetails = await getHotelById(hotelId).lean();
        res.render('edit', { hotelDetails });
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.render('edit', {});
    }
});

editController.post('/:id',
    body(['hotelName', 'city', 'freeRooms', 'imageUrl']).trim(),
    body('hotelName').isLength({ min: 4 }).withMessage('The name should be at least 4 characters!'),
    body('city').isLength({ min: 3 }).withMessage('The city should be at least 3 characters long!'),
    body('imageUrl').matches(/^https?:\/\//g).withMessage('The imageUrl should starts with http:// or https://'),
    body('freeRooms').isInt({ min: 1, max: 100 }).withMessage('Free rooms must be between 1 and 100!'),
    async (req, res) => {
        res.locals.loading = false;
        const hotelDetails = req.body;
        const hotelId = req.params.id;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }
            const { hotelName, city, freeRooms, imageUrl } = hotelDetails;
            await updateHotelById(hotelId, { hotelName, city, freeRooms, imageUrl });
            res.redirect(`/details/${hotelId}`);
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            hotelDetails._id = hotelId;
            res.render('edit', { hotelDetails });
        }
    });

module.exports = { editController };