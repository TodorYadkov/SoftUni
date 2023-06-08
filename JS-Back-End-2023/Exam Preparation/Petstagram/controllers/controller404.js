const controller404 = require('express').Router();

controller404.get('*', (req, res) => {
    res.render('404', {
        title: 'Petstagram',
    });
});

module.exports = { controller404 }; 