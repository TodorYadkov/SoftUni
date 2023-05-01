const { isLogged } = require('../middleware/guards');
const { homeController } = require('../controllers/homeController');
const { userController } = require('../controllers/userController');
const { controller404 } = require('../controllers/controller404');
const { createController } = require('../controllers/createController');
const { catalogController } = require('../controllers/catalogController');
const { detailsController } = require('../controllers/detailsController');
const { editControler } = require('../controllers/editController');
const { deleteController } = require('../controllers/deleteController');
const { searchController } = require('../controllers/searchController');

module.exports = (app) => {

    app.use(homeController);
    app.use('/user', userController);
    app.use('/create', isLogged, createController);
    app.use('/catalog', catalogController);
    app.use('/details', detailsController);
    app.use('/edit', isLogged, editControler);
    app.use('/delete', isLogged, deleteController);
    app.use('/search', isLogged, searchController);

    app.all('*', controller404);

};