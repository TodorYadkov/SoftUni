const handlebars = require('handlebars');

module.exports = (req, res, next) => {
    handlebars.registerHelper('equal', (x, y) => x.toString() == y.toString());
    next();
};

