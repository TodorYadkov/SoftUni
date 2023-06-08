const profileController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { getUserPhotos, getUserInfo } = require('../services/dataService.js');

profileController.get('/', async (req, res) => {
    const userId = res[userCookieName]._id;
    const [userDetails, allPhotos] = await Promise.all([
        getUserInfo(userId).lean(),
        getUserPhotos(userId).lean(),
    ]);

    userDetails.allPhotos = allPhotos;
    userDetails.photoCount = allPhotos.length;

    res.render('profile', {
        userDetails,
        title: 'Petstagram',
    });
});

profileController.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const [userDetails, allPhotos] = await Promise.all([
        getUserInfo(userId).lean(),
        getUserPhotos(userId).lean(),
    ]);

    userDetails.allPhotos = allPhotos;
    userDetails.photoCount = allPhotos.length;

    res.render('profile', {
        userDetails,
        title: 'Petstagram',
    });
});

module.exports = { profileController };