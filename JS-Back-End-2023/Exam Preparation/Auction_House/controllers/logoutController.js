const logoutController = require('express').Router();
const { userCookieName } = require('../config/environment.js');

logoutController.get('/', async (req, res) => {
    res.clearCookie(userCookieName);
    res.redirect('/');
});

module.exports = { logoutController };