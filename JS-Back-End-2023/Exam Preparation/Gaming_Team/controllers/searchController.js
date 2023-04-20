const { getAllGames, getGameBySearch } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

const searchController = require('express').Router();

searchController.get('/', async (req, res) => {
    try {
        const foundGames = await getAllGames().lean();
        res.render('search', {
            foundGames,
            title: 'Search - Gaming Team',
            pageId: 'search',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/search');
    }
});

searchController.post('/', async (req, res) => {
    try {
        const { search, searchPlatform } = req.body;
        const foundGames = await getGameBySearch(search, searchPlatform);
        foundGames.search = search;
        foundGames.searchPlatform = searchPlatform;
        res.render('search', {
            foundGames,
            title: 'Search - Gaming Team',
            pageId: 'search',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/search');
    }
});

module.exports = { searchController };