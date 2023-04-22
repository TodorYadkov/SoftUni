const { catalogController } = require('../controollers/catalogController.js');
const { controller404 } = require('../controollers/controller404.js');
const { createController } = require('../controollers/createController.js');
const { deletecontroller } = require('../controollers/deleteController.js');
const { detailsController } = require('../controollers/detailsController.js');
const { editController } = require('../controollers/editController.js');
const { homeController } = require('../controollers/homeController.js');
const { searchController } = require('../controollers/searchController.js');
const { userController } = require('../controollers/userController.js');
const { addEqualHelperHbs } = require('../middleware/addHelperHbs.js');
const { isLogged } = require('../middleware/guards.js');

module.exports = (app) => {

    app.use(homeController);
    app.use('/user', userController);
    app.use('/catalog', catalogController);
    app.use('/create', isLogged, addEqualHelperHbs, createController);
    app.use('/details', detailsController);
    app.use('/delete', isLogged, deletecontroller);
    app.use('/edit', isLogged, addEqualHelperHbs, editController);
    app.use('/search', isLogged, addEqualHelperHbs, searchController);

    app.all('*', controller404);
};