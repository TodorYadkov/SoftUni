const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const errorHandler = require('../util/errorHandler');
const { userCookieName } = require('../config/environment');
const { createHome } = require('../services/dataService');


createController.get('/', (req, res) => {
    const userInput = {};
    res.render('create', {
        userInput,
        title: 'Create Page',
    });
});

createController.post('/',
    body(['name', 'type', 'year', 'city', 'imageHome', 'description', 'availablePieces']).trim(),
    body('name')
        .notEmpty().withMessage('Name is required').bail()
        .isLength({ min: 6 }).withMessage('Name must be at least 6 characters long'),
    body('type').notEmpty().withMessage('Property Type is required'),
    body('year')
        .notEmpty().withMessage('Year Built is required').bail()
        .custom((value) => value >= 1850 && value <= 2021).withMessage('Year must be between 1850 and 2021'),
    body('imageHome')
        .notEmpty().withMessage('Home image is required').bail()
        .isURL().withMessage('Invalid URL')
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('Home image must starts with http:// or https://'),
    body('description')
        .notEmpty().withMessage('Property Description is required ').bail()
        .isLength({ max: 60 }).withMessage('Property description must be at maximum 60 characters long'),
    body('availablePieces')
        .notEmpty().withMessage('Available pieces is required').bail()
        .isInt({ min: 0, max: 10 }).withMessage('Available Pieces should be positive number (from 0 to 10)'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            const userId = res[userCookieName]._id;
            const newHome = await createHome(userInput, userId);
            res.redirect('/catalog');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('create', {
                userInput,
                title: 'Create Page',
            });
        }
    });

module.exports = { createController };