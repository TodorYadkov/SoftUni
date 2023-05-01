const { getOfferBySearch } = require('../services/dataService');
const errorHandler = require('../util/errorHandler');

const searchController = require('express').Router();

searchController.get('/', async (req, res) => {
    try {
        const searchStr = req.query.q;
        const allFound = await getOfferBySearch(searchStr).lean();

        res.render('search', {
            allFound,
            title: 'Search Page',
            userSearch: searchStr,
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }

});

searchController.post('/', async (req, res) => {
    const query = [];
    const search = req.body;
    if (search.userSearch) {
        query.push(`?q=${search.userSearch}`);
    }

    res.redirect(`/search${query.join('&')}`);
});

module.exports = { searchController };