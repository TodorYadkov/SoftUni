const catalogController = require('express').Router();
const { getAllData } = require('../services/dataService.js');

catalogController.get('/', async (req, res) => {
    const allPhotos = await getAllData().populate('owner', ['_id', 'username']).lean();

    res.render('catalog', {
        allPhotos,
        title: 'Petstagram',
    });
});

module.exports = { catalogController }; 