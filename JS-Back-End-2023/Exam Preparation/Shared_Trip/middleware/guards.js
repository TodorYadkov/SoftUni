const { userCookieName } = require('../config/environment');

function isLogged(req, res, next) {
    const userToken = res[userCookieName];
    if (!userToken) {
        res.redirect('/user/login');
        return;
    }
    next();
}

module.exports = {
    isLogged,
};