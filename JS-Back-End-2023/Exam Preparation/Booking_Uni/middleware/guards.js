const { userCookieName } = require('../config/environment.js');

function isGuest(req, res, next) {
    const token = req.cookies[userCookieName];
    if (!token) {
        res.redirect('/user/login');
        return;
    }
    next();
}

module.exports = { isGuest };