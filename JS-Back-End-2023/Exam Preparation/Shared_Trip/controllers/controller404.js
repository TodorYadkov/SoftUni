const controller404 = require('express').Router();

controller404.get('*', (req, res) => {
    res.render('404', {
        title: 'Page Not Found',
    });
});

module.exports = { controller404 };