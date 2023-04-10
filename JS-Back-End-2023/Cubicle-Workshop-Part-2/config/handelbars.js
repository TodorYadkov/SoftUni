const hbs = require('express-handlebars').create({ extname: '.hbs' });

module.exports = (app) => {
    app.engine('.hbs', hbs.engine); 
    app.set('view engine', '.hbs');
};                                    