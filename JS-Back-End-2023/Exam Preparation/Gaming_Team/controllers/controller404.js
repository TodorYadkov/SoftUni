const controller404 = require('express').Router();

controller404.get('*', (req, res) => {
    res.render('404', {
        title: '404 Page - Gaming Team',
        pageId: 'errorPage',
    });
});

module.exports = { controller404 };