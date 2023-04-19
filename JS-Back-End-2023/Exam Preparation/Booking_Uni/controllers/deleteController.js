const { userCookieName } = require('../config/environment.js');
const { deleteHotel } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    res.locals.loading = false;
    const hotelId = req.params.id;
    try {
        const userId = res[userCookieName]._id;
        await deleteHotel(hotelId, userId);
        res.redirect('/');
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.render('details');
    }
});

module.exports = { deleteController };