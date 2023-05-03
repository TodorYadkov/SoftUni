const { userCookieName } = require('../config/environment');

function isLogged(req, res, next) {
    const userToken = res[userCookieName];
    if (userToken) {
        next();
    } else {
        res.redirect('/user/login');
        return;
    }
}

module.exports = { isLogged };