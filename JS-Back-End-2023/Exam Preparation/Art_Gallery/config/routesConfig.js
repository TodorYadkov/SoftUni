const { controller404 } = require('../controllers/controller404.js');
const { createController } = require('../controllers/createController.js');
const { deleteController } = require('../controllers/deleteController.js');
const { detailsController } = require('../controllers/detailsController.js');
const { editController } = require('../controllers/editController.js');
const { galleryController } = require('../controllers/galleryController.js');
const { homeController } = require('../controllers/homeController.js');
const { profileController } = require('../controllers/profileController.js');
const { usersController } = require('../controllers/usersController.js');
const { isLogged } = require('../middleware/guards.js');

module.exports = (app) => {
    app.use(homeController);
    app.use('/user', usersController);
    app.use('/gallery', galleryController);
    app.use('/details', detailsController);
    app.use('/create', isLogged, createController);
    app.use('/delete', isLogged, deleteController);
    app.use('/edit', isLogged, editController);
    app.use('/profile', isLogged, profileController);
    app.all('*', controller404);
};