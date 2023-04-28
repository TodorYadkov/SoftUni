const { catalogController } = require('../controllers/catalogContoller.js');
const { controller404 } = require('../controllers/controller404.js');
const { detailsController } = require('../controllers/detailsController.js');
const { homeController } = require('../controllers/homeController.js');
const { logoutController } = require('../controllers/logoutController.js');
const { registerController } = require('../controllers/registerController.js');
const addHelperHbs = require('../middleware/addHelperHbs.js');
const { isLogged } = require('../middleware/guards.js');
const { createController } = require('../controllers/createController.js');
const { loginController } = require('../controllers/loginController.js');
const { editController } = require('../controllers/editController.js');
const { deleteController } = require('../controllers/deleteController.js');
const { closedAuctionController } = require('../controllers/closedAuctionController.js');

module.exports = (app) => {

    app.use(homeController);
    app.use('/register', registerController);
    app.use('/login', loginController);
    app.use('/logout', isLogged, logoutController);
    app.use('/catalog', catalogController);
    app.use('/create', isLogged, addHelperHbs, createController);
    app.use('/details', detailsController);
    app.use('/edit', isLogged, addHelperHbs, editController);
    app.use('/delete', isLogged, deleteController);
    app.use('/closed-auction', isLogged, closedAuctionController);

    app.all('*', controller404);
};