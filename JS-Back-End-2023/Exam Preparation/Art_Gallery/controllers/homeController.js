const { getAllPublications } = require('../services/publicationService.js');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    const allPublucations = await getAllPublications().lean();
    
    res.render('home', {
        title: 'Home Page',
        allPublucations
    });
});

module.exports = {
    homeController,
};