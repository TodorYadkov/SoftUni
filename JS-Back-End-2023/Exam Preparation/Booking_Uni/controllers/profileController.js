const { userCookieName } = require('../config/environment.js');
const { getUserById } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

const profileController = require('express').Router();

profileController.get('/', async (req, res) => {
    res.locals.loading = false;
    try {
        const userId = res[userCookieName]._id;
        const userInfo = await getUserById(userId).populate('bookedHotels', 'hotelName').lean();
        res.render('profile', { userInfo });
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.render('profile', {});
    }
});

module.exports = { profileController };