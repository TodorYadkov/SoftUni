const { userCookieName } = require('../config/environment.js');

function isLogged(req, res, next) {
    if (res[userCookieName]) {
        next();
    } else {
        return res.redirect('/user/login');
    }
}

function onlyForGuest(req, res, next) {
    if (res[userCookieName]) {
        return res.redirect('/');
    } else {
        next();
    }
}

module.exports = {
    isLogged,
    onlyForGuest,
};