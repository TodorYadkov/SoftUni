const accessoryController = require('express').Router();
const { createAccessory, attachCube, getOnlyUnused } = require('../services/accessoryService.js');
const { getCubeByIdNotPopulate } = require('../services/cubeServices.js');

accessoryController.get('/', (req, res) => {
    const accesoryData = {};
    res.render('accessory/createAccessory', {
        accesoryData,
    });
});

accessoryController.post('/create', async (req, res) => {
    const accesoryData = req.body;
    try {
        await createAccessory(accesoryData);
        res.redirect(302, '/');
    } catch (error) {
        res.render('accessory/createAccessory', {
            err: error.message,
            accesoryData,
        });
    }
});

accessoryController.get('/attach/:id', async (req, res) => {
    const cubeId = req.params.id;
    const cube = await getCubeByIdNotPopulate(cubeId);
    const accessories = await getOnlyUnused(cube.accessories).lean();
    res.render('accessory/attachAccessory', {
        cube,
        accessories
    });
});

accessoryController.post('/attach/:id', async (req, res) => {
    const cubeId = req.params.id;
    const accessoryId = req.body.accessory;
    await attachCube(cubeId, accessoryId);

    res.redirect(`/details/${cubeId}`);
});

module.exports = { accessoryController };