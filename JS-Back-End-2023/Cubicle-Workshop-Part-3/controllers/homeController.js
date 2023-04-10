const { getAllCubes } = require('../services/cubeServices.js');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    const cubes = await getAllCubes();
    res.render('index', {
        cubes,
    });
});

module.exports = { homeController };