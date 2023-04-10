const detailsController = require('express').Router();
const { getCubeById } = require('../services/cubeServices.js');

detailsController.get('/:id', async (req, res) => {
    const cubeId = req.params.id;
    const cube = await getCubeById(cubeId);
    
    res.render('details', {
        cube,
    });
});

module.exports = { detailsController };