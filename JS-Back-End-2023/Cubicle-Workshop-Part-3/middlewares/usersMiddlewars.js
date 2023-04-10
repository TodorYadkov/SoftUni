const jwt = require('jsonwebtoken');
const { sessionName, secret } = require('../config/appConfig.js');

function addUserSession(req, res, next) {
    const token = req.cookies[sessionName];
    if (token) {
        try {
            const decodedToken = jwt.verify(token, secret);
            req.userData = decodedToken;
            res.locals.userData = decodedToken;
        } catch (error) {
            res.clearCookie(sessionName);
            res.redirect('/user/login');
        }
    }
    
    next();
};

module.exports = { addUserSession };