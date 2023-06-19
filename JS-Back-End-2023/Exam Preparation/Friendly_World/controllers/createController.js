const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { createData } = require('../services/dataService.js');
const { userCookieName } = require('../config/environment.js');

createController.get('/', (req, res) => {
    const userInput = {};
    res.render('create', {
        userInput,
        title: 'Create Page',
    });
});

createController.post('/',
    body(['name', 'years', 'kind', 'imageUrl', 'need', 'location', 'description']).trim(),
    body('name')
        .notEmpty().withMessage('Name is required').bail()
        .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    body('years')
        .notEmpty().withMessage('The years is required').bail()
        .isInt({ min: 1, max: 100 }).withMessage('The years must be a number between 1 and  100'),
    body('kind')
        .notEmpty().withMessage('Kind is required').bail()
        .isLength({ min: 3 }).withMessage('Kind must be at least 3 characters long'),
    body('imageUrl')
        .notEmpty().withMessage('The photo image is required').bail()
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('The photo image must starts with http:// or https://'),
    body('need')
        .notEmpty().withMessage('The need is required').bail()
        .isLength({ min: 3, max: 20 }).withMessage('The need must be at least 3 and no longer than 20 characters'),
    body('location')
        .notEmpty().withMessage('Location is required').bail()
        .isLength({ min: 5, max: 15 }).withMessage('Location must be at least 5 and no longer than 15 characters'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ min: 5, max: 50 }).withMessage('Description must be at least 5 and no longer than 50 characters'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }
            const userId = res[userCookieName]._id;
            const newAnimal = await createData(userInput, userId);

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