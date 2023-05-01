const { getLastThreeAdded } = require('../services/dataService');
const errorHandler = require('../util/errorHandler');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    try {
        const lastThreeHome = await getLastThreeAdded().lean();
        res.render('home', {
            lastThreeHome,
            title: 'Home Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

module.exports = { homeController };