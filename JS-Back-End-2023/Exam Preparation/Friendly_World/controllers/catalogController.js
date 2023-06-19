const catalogController = require('express').Router();
const { getAllData } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

catalogController.get('/', async (req, res) => {
    
    try {
        const allAnimals = await getAllData().lean();

        res.render('catalog', {
            allAnimals,
            title: 'Dashboard Page',
        });
    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.redirect('/not-found');
    }
});

module.exports = { catalogController }; 