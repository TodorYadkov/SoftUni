const { userCookieName, jwtSecret } = require('../config/environment.js');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies[userCookieName];
    if (token) {
        try {
            const decodedToken = jwt.verify(token, jwtSecret);
            res[userCookieName] = decodedToken;
            res.locals.hasUser = true;
        } catch (error) {
            res.clearCookie();
            res.redirect('/user/login');
        }
    }

    next();
};