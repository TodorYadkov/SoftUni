const express = require('express');
const hbs = require('express-handlebars').create({ extname: '.hbs' });
const cookieParser = require('cookie-parser');
const checkUserSession = require('../middleware/checkUserSession.js');

module.exports = (app) => {
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.urlencoded({ extended: false }));
    app.use('/static', express.static('static'));

    app.use(cookieParser());
    app.use(checkUserSession);
};
