const { userCookieName } = require('../config/environment.js');

function isLogged(req, res, next) {
    const token = req.cookies[userCookieName];
    if (!token) {
        res.redirect('/user/login');
        return;
    }

    next();
};

module.exports = {
    isLogged,
};