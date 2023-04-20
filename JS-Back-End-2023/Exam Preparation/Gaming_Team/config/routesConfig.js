const { catalogController } = require('../controllers/catalogController.js');
const { controller404 } = require('../controllers/controller404.js');
const { createController } = require('../controllers/createController.js');
const { deleteController } = require('../controllers/deleteController.js');
const { detailsController } = require('../controllers/detailsController.js');
const { editController } = require('../controllers/editController.js');
const { homeController } = require('../controllers/homeController.js');
const { loginController } = require('../controllers/loginController.js');
const { logoutController } = require('../controllers/logoutController.js');
const { registerController } = require('../controllers/registerController.js');
const { searchController } = require('../controllers/searchController.js');
const addHbsHelpers = require('../middleware/addHbsHelpers.js');
const { isLogged } = require('../middleware/guards.js');

module.exports = (app) => {

    app.use(homeController);
    app.use('/register', registerController);
    app.use('/login', loginController);
    app.use('/logout', isLogged, logoutController);
    app.use('/catalog', catalogController);
    app.use('/create', isLogged, addHbsHelpers, createController);
    app.use('/details', detailsController);
    app.use('/edit', isLogged, addHbsHelpers, editController);
    app.use('/delete', isLogged, deleteController);
    app.use('/search', isLogged, addHbsHelpers, searchController);

    app.all('*', controller404);
};