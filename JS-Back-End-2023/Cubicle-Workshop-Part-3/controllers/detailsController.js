const detailsController = require('express').Router();
const { getCubeById } = require('../services/cubeServices.js');

detailsController.get('/:id', async (req, res) => {
    const cubeId = req.params.id;
    const cube = await getCubeById(cubeId);
    cube.isOwner = false;
    cube.userData = req.userData;
    if (req.userData) {
        cube.isOwner = req.userData._id == cube.owner;
    }

    res.render('details', {
        cube,
    });
});

module.exports = { detailsController };