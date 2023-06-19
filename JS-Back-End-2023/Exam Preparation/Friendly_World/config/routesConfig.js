const { controller404 } = require('../controllers/controller404.js');
const { homeController } = require('../controllers/homeController.js');
const { userController } = require('../controllers/userController.js');
const { catalogController } = require('../controllers/catalogController.js');
const { detailsController } = require('../controllers/detailsController.js');
const { createController } = require('../controllers/createController.js');
const { deleteController } = require('../controllers/deleteController.js');
const { editController } = require('../controllers/editController.js');
const { searchController } = require('../controllers/searchController.js');
const { isLogged } = require('../middleware/guards.js');


module.exports = (app) => {

    app.use(homeController);
    app.use('/user', userController);
    app.use('/catalog', catalogController);
    app.use('/details', detailsController);
    app.use('/create', isLogged, createController);
    app.use('/delete', isLogged, deleteController);
    app.use('/edit', isLogged, editController);
    app.use('/search', searchController);

    app.all('*', controller404);
};