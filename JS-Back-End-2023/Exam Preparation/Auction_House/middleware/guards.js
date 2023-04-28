const { userCookieName } = require('../config/environment.js');

exports.isLogged = (req, res, next) => {
    const token = req.cookies[userCookieName];
    if (!token) {
        res.redirect('/login');
        return;
    }
    next();
};