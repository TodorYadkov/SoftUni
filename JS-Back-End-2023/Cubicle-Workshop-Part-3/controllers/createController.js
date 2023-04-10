const createController = require('express').Router();
const { createCube } = require('../services/cubeServices.js');

createController.get('/', (req, res) => {
    const userCube = {};
    res.render('create', {
        userCube
    });
});

createController.post('/', async (req, res) => {
    const userCube = req.body;
    userCube.owner = req.userData._id;
    try {
        await createCube(userCube);
        res.redirect(302, '/');
    } catch (error) {
        res.render('create', {
            err: error.message,
            userCube,
        });
    }
});

module.exports = { createController };