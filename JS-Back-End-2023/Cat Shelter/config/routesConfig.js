const { addBreedController } = require('../controllers/addBreedController');
const { addCatController } = require('../controllers/addCatController');
const { editController } = require('../controllers/editController');
const { homeController } = require('../controllers/homeController');
const { newCatShelterController } = require('../controllers/newCatShelterController');
const { notFound404Controller } = require('../controllers/notFound404Controller');
const addHbsHelper = require('../middleware/addHbsHelper');

module.exports = (app) => {

    app.use(homeController);
    app.use('/add-breed', addBreedController);
    app.use('/add-cat', addCatController);
    app.use('/edit', addHbsHelper, editController);
    app.use('/new-home', newCatShelterController);

    app.use('*', notFound404Controller);
};