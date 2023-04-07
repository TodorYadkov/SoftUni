const { getAllCubes } = require('../services/cubeServices.js');

const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    const cubes = getAllCubes();
    res.render('index', {
        cubes,
    });
});

module.exports = { homeController };