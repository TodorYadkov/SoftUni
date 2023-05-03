const { userCookieName, jwtSecret } = require('../config/environment');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const userToken = req.cookies[userCookieName];
    if (userToken) {
        try {
            const decodedToken = jwt.verify(userToken, jwtSecret);
            res[userCookieName] = decodedToken;
            res.locals.hasUser = true;
            res.locals.username = decodedToken.username;
        } catch (error) {
            res.clearCokie(userCookieName);
            res.redirect('/user/login');
            return;
        }
    }

    next();
};