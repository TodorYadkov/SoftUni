const { getFirstThreeAds } = require('../services/dataService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    const threeAds = await getFirstThreeAds().lean();
    // Get count applies for each ad
    threeAds.map(aObj => aObj.countApplies = aObj.usersApplied.length);
    res.render('home', {
        threeAds,
        title: 'Home Page',
    });
});

module.exports = { homeController };