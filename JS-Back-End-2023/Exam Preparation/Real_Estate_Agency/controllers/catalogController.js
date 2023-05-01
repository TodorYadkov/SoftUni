const { getAllOffers } = require('../services/dataService');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {
    const allOffer = await getAllOffers().lean();
    res.render('catalog', {
        allOffer,
        title: 'Catalog',
    });
});

module.exports = { catalogController };