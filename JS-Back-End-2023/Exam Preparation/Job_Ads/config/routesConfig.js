const { catalogController } = require('../controllers/catalogController');
const { controller404 } = require('../controllers/controller404');
const { createController } = require('../controllers/createController');
const { deleteController } = require('../controllers/deleteController');
const { detailsController } = require('../controllers/detailsController');
const { editController } = require('../controllers/editController');
const { homeController } = require('../controllers/homeController');
const { searchController } = require('../controllers/searchController');
const { userController } = require('../controllers/userController');
const { isLogged } = require('../middleware/guards');

module.exports = (app) => {

    app.use('/', homeController);
    app.use('/user', userController);
    app.use('/catalog', catalogController);
    app.use('/create', isLogged, createController);
    app.use('/details', detailsController);
    app.use('/edit', isLogged, editController);
    app.use('/delete', isLogged, deleteController);
    app.use('/search', isLogged, searchController);

    app.all('*', controller404);
};