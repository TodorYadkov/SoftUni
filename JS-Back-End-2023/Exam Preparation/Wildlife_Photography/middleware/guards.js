const { userCookieName } = require('../config/environment.js');

function isLogged(req, res, next) {
    if (res[userCookieName]) {
        next();
    } else {
        res.redirect('/user/login');
    }
}

module.exports = {
    isLogged,
};