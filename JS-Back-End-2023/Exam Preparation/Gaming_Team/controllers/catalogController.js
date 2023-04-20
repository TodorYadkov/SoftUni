const catalogController = require('express').Router();
const { getAllGames } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

catalogController.get('/', async (req, res) => {
    try {
        const allGames = await getAllGames().lean();
        res.render('catalog', {
            allGames,
            title: 'Catalog Page - Gaming Team',
            pageId: 'catalog',
        });
    } catch (error) {
        console.log(errorHandler(error).message);
    }
});

module.exports = { catalogController };