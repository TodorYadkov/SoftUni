const { getDataBySearch } = require('../services/dataService.js');

const searchController = require('express').Router();

searchController.get('/', async (req, res) => {
    const { search, payment } = req.query;

    const allFound = await getDataBySearch(search, payment).lean();
    res.render('search', {
        allFound,
        title: 'Search',
        search,
        payment,
    });
});

searchController.post('/', (req, res) => {
    const { search, payment } = req.body;
    const query = [];
    search !== '' ? query.push(`search=${search}`) : null;
    payment !== '' ? query.push(`payment=${payment}`) : null;
    res.redirect(`/search?${query.join('&')}`);
});

module.exports = { searchController };