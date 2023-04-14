const { getAllPublications } = require('../services/publicationService.js');

const galleryController = require('express').Router();

galleryController.get('/', async (req, res) => {
    const allPaintings = await getAllPublications().lean();

    res.render('gallery', {
        allPaintings,
        title: 'Gallery Page',
    });
});

module.exports = { galleryController };