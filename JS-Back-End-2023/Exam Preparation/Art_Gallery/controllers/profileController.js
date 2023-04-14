const { userCookieName } = require('../config/environment.js');
const { getUserById, getSharedPubOfUser } = require('../services/publicationService.js');

const profileController = require('express').Router();

profileController.get('/', async (req, res) => {
    const [user, sharedPub] = await Promise.all([
        getUserById(res[userCookieName]._id).populate('my-publications', 'title').lean(),
        getSharedPubOfUser(res[userCookieName]._id).lean()
    ]);

    user.sharedPub = sharedPub.map(p => p.title).join(', ');

    if (user['my-publications'].length !== 0) {
        user.publications = user['my-publications'].map(p => p.title).join(', ');
    } else {
        user.publications = false;
    }

    res.render('profile', {
        user,
        title: 'Profile Page',
    });
});

module.exports = { profileController };