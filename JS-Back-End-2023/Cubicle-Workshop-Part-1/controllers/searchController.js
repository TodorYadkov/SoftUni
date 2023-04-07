const searchController = require('express').Router();
const { getCubeBySearch } = require('../services/cubeServices.js');

searchController.post('/', (req, res) => {
    const { search, from, to } = req.body;
    
    const cubes = getCubeBySearch(search, from, to);
    res.render('index', {
        cubes,
        search,
        from,
        to,
    });
});

module.exports = { searchController };