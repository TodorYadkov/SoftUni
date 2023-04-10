const searchController = require('express').Router();
const { getCubeBySearch } = require('../services/cubeServices.js');

searchController.post('/', async (req, res) => {
    const { search, from, to } = req.body;

    const cubes = await getCubeBySearch(search, from, to);
    res.render('index', {
        cubes,
        search,
        from,
        to,
    });
});

module.exports = { searchController };