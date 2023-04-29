const catalogController = require('express').Router();
const { getAllAds } = require('../services/dataService');

catalogController.get('/', async (req, res) => {
    const allAds = await getAllAds().lean();
    res.render('catalog', {
        allAds,
        title: 'All-Ads Page',
    });
});

module.exports = { catalogController };