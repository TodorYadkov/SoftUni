const { getAllOffers } = require('../services/dataService.js');
const errorHandler = require('../util/errorHandler.js');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {
    try {
        const allAuctions = await getAllOffers().lean();
        res.render('catalog', {
            allAuctions,
            title: 'Browse Auctions',
        });
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.redirect('/');
    }
});

module.exports = { catalogController };