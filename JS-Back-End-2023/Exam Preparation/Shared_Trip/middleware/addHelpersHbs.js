const handlebars = require('handlebars');

const checkRadioBtn = (req, res, next) => {
    handlebars.registerHelper('check', (a, b) => a == b ? 'checked' : '');
    next();
};

module.exports = {
    checkRadioBtn,
};