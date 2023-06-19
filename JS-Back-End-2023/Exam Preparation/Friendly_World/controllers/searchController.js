const searchController = require('express').Router();
const { getAllData, getDataBySearch } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');


searchController.get('/', async (req, res) => {
    try {
        const foundAnimals = await getAllData().lean();
        res.render('search', {
            foundAnimals,
            title: 'Search Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/not-found');
    }
});

searchController.post('/', async (req, res) => {
    try {
        const { query } = req.body;
        const foundAnimals = await getDataBySearch(query).lean();
        foundAnimals.query = query;
        
        res.render('search', {
            foundAnimals,
            title: 'Search Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/not-found');
    }
});

module.exports = { searchController };