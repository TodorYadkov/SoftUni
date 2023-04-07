const createController = require('express').Router();
const handlebars = require('handlebars');                       // Load handlebars to register new helper
const { createCube } = require('../services/cubeServices.js');

handlebars.registerHelper('equal', function (a, b) {            // Create a new helper - handlebars
    return a === b;
});

createController.get('/', (req, res) => {
    const userCube = {};
    res.render('create', {
        userCube
    });
});

createController.post('/', async (req, res) => {
    const userCube = req.body;
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