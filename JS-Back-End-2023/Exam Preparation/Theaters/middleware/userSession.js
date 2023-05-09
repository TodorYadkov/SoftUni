const { userCookieName, jwtSecret } = require('../config/enviroments');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const userToken = req.cookies[userCookieName];
    if (userToken) {
        try {
            const decodedToken = jwt.verify(userToken, jwtSecret);
            res.locals.hasUser = true;
            res[userCookieName] = decodedToken;
        } catch (error) {
            res.clearCookie(userCookieName);
            res.redirect('/user/login');
        }
    }
    next();
};