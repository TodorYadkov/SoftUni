const jwt = require('jsonwebtoken');
const { jwtSecret, userCookieName } = require('../config/environment.js');

module.exports = (req, res, next) => {
    const token = req.cookies[userCookieName];
    if (token) {
        try {
            const decodedToken = jwt.verify(token, jwtSecret);
            res.userData = decodedToken;
            res.locals.hasUser = true;
            res.locals.email = decodedToken.email;
        } catch (error) {
            res.clearCookie(userCookieName);
            res.redirect('/user/login');
        }
    }
    next();
};