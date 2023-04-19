const controller404 = require('express').Router();

controller404.get('*', (req, res) => {
    res.locals.loading = false;
    res.render('404');
});

module.exports = { controller404 };