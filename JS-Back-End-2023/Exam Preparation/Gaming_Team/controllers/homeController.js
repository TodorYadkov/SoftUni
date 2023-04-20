const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page - Gaming Team',
        pageId: 'home',
    });
});

module.exports = { homeController };