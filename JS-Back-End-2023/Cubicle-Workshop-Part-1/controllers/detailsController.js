const detailsController = require('express').Router();
const { getCubeById } = require('../services/cubeServices.js');

detailsController.get('/:id', (req, res) => {
    const cubeId = req.params.id;
    const cube = getCubeById(cubeId);
    res.render('details', {
        cube,
    });
});

module.exports = { detailsController };