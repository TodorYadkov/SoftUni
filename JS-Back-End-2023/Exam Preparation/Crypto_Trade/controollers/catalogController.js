const { getAllData } = require('../services/dataService.js');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {
    const allOffers = await getAllData().lean();
    res.render('catalog', {
        allOffers,
        title: 'Trade Catalog',
    });
});

module.exports = { catalogController };