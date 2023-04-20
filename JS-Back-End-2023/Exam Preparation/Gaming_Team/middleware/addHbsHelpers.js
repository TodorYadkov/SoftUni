const hbs = require('handlebars');

module.exports = (req, res, next) => {
    hbs.registerHelper('equal', function (a, b) {
        return a == b;
    });

    next();
};
