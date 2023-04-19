const { controller404 } = require('../controllers/controller404.js');
const { createController } = require('../controllers/createController.js');
const { deleteController } = require('../controllers/deleteController.js');
const { detailsController } = require('../controllers/detailsController.js');
const { editController } = require('../controllers/editController.js');
const { homeController } = require('../controllers/homeController.js');
const { profileController } = require('../controllers/profileController.js');
const { userController } = require('../controllers/userController.js');
const { isGuest } = require('../middleware/guards.js');
const loadingMessage = require('../middleware/loadingMessage.js');

module.exports = (app) => {
    app.use(homeController);
    app.use('/user', loadingMessage, userController);
    app.use('/create', isGuest, loadingMessage, createController);
    app.use('/details', isGuest, loadingMessage, detailsController);
    app.use('/edit', isGuest, loadingMessage, editController);
    app.use('/delete', isGuest, loadingMessage, deleteController);
    app.use('/profile', isGuest, loadingMessage, profileController);
    app.all('*', controller404);
};