const router = require('express').Router();

const { aboutController } = require('./controllers/aboutController.js');
const { accessoryController } = require('./controllers/accessoryCreate.js');
const { userController } = require('./controllers/userController.js');
const { controller404 } = require('./controllers/controller404.js');
const { createController } = require('./controllers/createController.js');
const { detailsController } = require('./controllers/detailsController.js');
const { homeController } = require('./controllers/homeController.js');
const { searchController } = require('./controllers/searchController.js');
const { editController } = require('./controllers/editController.js');
const { hasUser } = require('./guard/hasUser.js');
const { deleteController } = require('./controllers/deleteController.js');

router.use('/', homeController);
router.use('/search', searchController);
router.use('/about', aboutController);
router.use('/create', hasUser, createController);
router.use('/details', detailsController);
router.use('/accessory', accessoryController);
router.use('/user', userController);
router.use('/edit', hasUser, editController);
router.use('/delete', hasUser, deleteController);
router.use('*', controller404);


module.exports = { router };