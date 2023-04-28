const jwt = require('jsonwebtoken');
const { jwtSecret, userCookieName } = require('../config/environment.js');

module.exports = (req, res, next) => {
    const userToken = req.cookies[userCookieName];
    if (userToken) {
        try {
            const decodedToken = jwt.verify(userToken, jwtSecret);
            res[userCookieName] = decodedToken;
            res.locals.hasUser = true;
        } catch (error) {
            res.clearCookie();
            res.redirect('/login');
        }
    }
    
    next();
};