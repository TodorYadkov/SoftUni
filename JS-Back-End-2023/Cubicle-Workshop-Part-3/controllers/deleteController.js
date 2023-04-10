const { getCubeById, deleteCube } = require('../services/cubeServices.js');
const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    const cube = await getCubeById(req.params.id);
    res.render('deleteCube', { cube });
});

deleteController.post('/:id', async (req, res) => {
    await deleteCube(req.params.id);
    res.redirect('/');
});

module.exports = { deleteController };