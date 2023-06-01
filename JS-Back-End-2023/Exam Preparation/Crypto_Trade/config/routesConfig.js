const { controller404 } = require('../controllers/controller404.js');
const { createController } = require('../controllers/createController.js');
const { deleteController } = require('../controllers/deleteController.js');
const { detailsController } = require('../controllers/detailsController.js');
const { editController } = require('../controllers/editController.js');
const { catalogController } = require('../controllers/catalogController.js');
const { homeController } = require('../controllers/homeController.js');
const { userController } = require('../controllers/userController.js');
const { isLogged } = require('../middleware/guards.js');
const { addEqualHelperHbs } = require('../middleware/addHelperHbs');
const { searchController } = require('../controllers/searchController.js');


module.exports = (app) => {

    app.use(homeController);
    app.use('/user', userController);
    app.use('/catalog', catalogController);
    app.use('/details', detailsController);
    app.use('/create', isLogged, addEqualHelperHbs, createController);
    app.use('/delete', isLogged, deleteController);
    app.use('/edit', isLogged, addEqualHelperHbs, editController);
    app.use('/search', isLogged, addEqualHelperHbs, searchController);

    app.all('*', controller404);
};