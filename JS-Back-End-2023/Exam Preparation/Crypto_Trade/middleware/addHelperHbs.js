const handlebars = require('handlebars');

function addEqualHelperHbs(req, res, next) {
    handlebars.registerHelper('equal', (x, y) => x == y);
    next();
}

module.exports = {
    addEqualHelperHbs,
}; 