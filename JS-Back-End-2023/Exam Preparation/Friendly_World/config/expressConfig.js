const express = require('express');
const hbs = require('express-handlebars').create({ extname: '.hbs' });
const cookieParser = require('cookie-parser');
const userSession = require('../middleware/userSession.js');

module.exports = (app) => {
    // Config express-hadlebars
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
    // Config express
    app.use(express.urlencoded({ extended: false }));
    app.use('/static', express.static('static'));
    // Config middleware
    app.use(cookieParser());
    app.use(userSession);
};