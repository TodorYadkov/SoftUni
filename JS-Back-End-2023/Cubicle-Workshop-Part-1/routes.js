const router = require('express').Router();

const { aboutController } = require('./controllers/aboutController.js');
const { controller404 } = require('./controllers/controller404.js');
const { createController } = require('./controllers/createController.js');
const { detailsController } = require('./controllers/detailsController.js');
const { homeController } = require('./controllers/homeController.js');
const { searchController } = require('./controllers/searchController.js');

router.use('/', homeController);
router.use('/search', searchController);
router.use('/about', aboutController);
router.use('/create', createController);
router.use('/details', detailsController);
router.use('*', controller404);


module.exports = { router };