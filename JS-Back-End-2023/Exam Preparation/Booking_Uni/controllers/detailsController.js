const detailsController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { getHotelById, checkIfBooked, bookHotel } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');


detailsController.get('/:id', async (req, res) => {
    res.locals.loading = false;
    try {
        const hotelId = req.params.id;
        const userId = res[userCookieName]._id;
        const [hotelDetails, isBooked] = await Promise.all([
            getHotelById(hotelId).lean(),
            checkIfBooked(userId, hotelId)
        ]);
        if (res[userCookieName]) {
            hotelDetails.isOwner = res[userCookieName]._id == hotelDetails.ownerId;
            hotelDetails.isBooked = isBooked;
        }

        res.render('details', { hotelDetails });
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.render('details');
    }

});

detailsController.get('/:id/book', async (req, res) => {
    res.locals.loading = false;
    try {
        const hotelId = req.params.id;
        const userId = res[userCookieName]._id;
        const userInfo = await bookHotel(userId, hotelId);
        res.redirect(`/details/${hotelId}`);
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.render('details');
    }

});

module.exports = {
    detailsController,
};