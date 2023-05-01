const { userCookieName, jwtSecret } = require('../config/environment');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const userToken = req.cookies[userCookieName];
    if (userToken) {
        try {
            const decodedToken = jwt.verify(userToken, jwtSecret);
            res[userCookieName] = decodedToken;
            res.locals.userEmail = decodedToken.email;
        } catch (error) {
            res.clearCookie(userCookieName);
            res.redirect('/user/login');
        }
    }
    next();
};