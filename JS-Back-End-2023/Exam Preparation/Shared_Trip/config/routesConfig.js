const { controller404 } = require('../controllers/controller404');
const { createController } = require('../controllers/createController');
const { deleteController } = require('../controllers/deleteController');
const { detailsController } = require('../controllers/detailsController');
const { editController } = require('../controllers/editController');
const { homeController } = require('../controllers/homeController');
const { profileController } = require('../controllers/profileController');
const { sharedTripsController } = require('../controllers/sharedTripsController');
const { userController } = require('../controllers/userController');
const { checkRadioBtn } = require('../middleware/addHelpersHbs');
const { isLogged } = require('../middleware/guards');

module.exports = (app) => {

    app.use(homeController);
    app.use('/user', checkRadioBtn, userController);
    app.use('/share-trips', sharedTripsController);
    app.use('/create', isLogged, createController);
    app.use('/details', detailsController);
    app.use('/delete', isLogged, deleteController);
    app.use('/edit', isLogged, editController);
    app.use('/profile', isLogged, profileController);

    app.all('*', controller404);

};