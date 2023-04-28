const handlebars = require('handlebars');

module.exports = (req, res, next) => {
    handlebars.registerHelper('equal', ((a, b) => {
        return a == b;
    }));

    next();
};