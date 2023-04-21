const { userCookieName, jwtSecret } = require('../config/environment.js');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies[userCookieName];
    if (token) {
        try {
            const decodedToken = jwt.verify(token, jwtSecret);
            res.locals.hasUser = true;
            res[userCookieName] = decodedToken;
        } catch (error) {
            res.clearCookie(userCookieName);
            res.redirect('/user/login');
            return;
        }
    }
    
    next();
};