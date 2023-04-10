const { getCubeById, updateCube } = require('../services/cubeServices.js');

const editController = require('express').Router();

editController.get('/:id', async (req, res) => {
    const cube = await getCubeById(req.params.id);
    res.render('editCube', { cube });
});

editController.post('/:id', async (req, res) => {
    const newData = req.body;
    try {
        const modifiedCube = await updateCube(req.params.id, newData);
        res.redirect(`/details/${req.params.id}`);
    } catch (error) {
        res.render('editCube', {
            err: error.message,
            cube: newData,
        });
    }
});

module.exports = { editController };