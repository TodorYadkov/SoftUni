module.exports = (req, res, next) => {
    res.locals.loading = true;
    next();
};