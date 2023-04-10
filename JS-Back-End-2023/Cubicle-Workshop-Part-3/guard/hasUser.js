function hasUser(req, res, next) {
    if (!req.userData) {
        return res.redirect('/user/login');
    }

    next();
}

module.exports = { hasUser };