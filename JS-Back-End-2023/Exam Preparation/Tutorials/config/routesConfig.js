const { createController } = require('../controllers/createController');
const { deleteController } = require('../controllers/deleteController');
const { detailsController } = require('../controllers/detailsController');
const { editController } = require('../controllers/editController');
const { homeController } = require('../controllers/homeController');
const { profileController } = require('../controllers/profile');
const { userController } = require('../controllers/userController');
const { isLogged } = require('../middleware/guards');

module.exports = (app) => {

    app.use(homeController);
    app.use('/user', userController);
    app.use('/create', isLogged, createController);
    app.use('/details', isLogged, detailsController);
    app.use('/edit', isLogged, editController);
    app.use('/delete', isLogged, deleteController);
    app.use('/profile', isLogged, profileController);

};