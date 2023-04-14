const jwt = require('jsonwebtoken');
const { jwtSecret, userCookieName } = require('../config/environment.js');

module.exports = (req, res, next) => {
    const token = req.cookies[userCookieName];
    if (token) {
        try {
            const decodedToken = jwt.verify(token, jwtSecret);
            res.userData = decodedToken;
            res.locals.hasUser = true;
        } catch (error) {
            res.clearCookie(userCookieName);
            res.redirect('/login');
        }
    }
    next();
};