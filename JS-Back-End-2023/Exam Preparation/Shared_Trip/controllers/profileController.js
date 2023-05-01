const { userCookieName } = require('../config/environment');
const { getUserDataById } = require('../services/dataService');
const { errorHandler } = require('../util/errorHandler');

const profileController = require('express').Router();

profileController.get('/', async (req, res) => {
    try {
        const userId = res[userCookieName]._id;
        const userInfo = await getUserDataById(userId).populate('tripsHistory', ['startPoint', 'endPoint', 'date', 'time']).lean();
        userInfo.countTrips = userInfo.tripsHistory.length;
        userInfo.gender = userInfo.gender.toLocaleLowerCase();
        res.render('profile', {
            userInfo,
            title: 'Profile Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

module.exports = { profileController };