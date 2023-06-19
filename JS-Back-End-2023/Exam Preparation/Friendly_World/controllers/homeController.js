const homeController = require('express').Router();
const { getLastThreeAdded } = require('../services/dataService');
const { errorHandler } = require('../util/errorHandler');

homeController.get('/', async (req, res) => {
    try {
        const lastThreeAdedAnimal = await getLastThreeAdded().lean();
        res.render('home', {
            lastThreeAdedAnimal,
            title: 'Home Page',
        });
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.redirect('/not-found');
    }

});

module.exports = {
    homeController,
}; 