const { getAllHotels } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    try {
        const allHotels = await getAllHotels().lean();
        res.render('home', {
            allHotels
        });
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.render('home', {});
    }
});

module.exports = { homeController };