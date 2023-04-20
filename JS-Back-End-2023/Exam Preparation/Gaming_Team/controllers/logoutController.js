const { userCookieName } = require('../config/environment.js');

const logoutController = require('express').Router();

logoutController.get('/', async (req, res) => {
    res.clearCookie(userCookieName);
    res.redirect('/');
});

module.exports = { logoutController };