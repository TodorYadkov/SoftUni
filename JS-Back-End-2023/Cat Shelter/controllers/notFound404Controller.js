const notFound404Controller = require('express').Router();

notFound404Controller.get('/', (req, res) => {
    res.render('notFound404', {
        title: 'Page Not Found 404',
    });
});

module.exports = { notFound404Controller };