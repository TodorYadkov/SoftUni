const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { createData } = require('../services/dataService.js');
const { userCookieName } = require('../config/environment.js');

createController.get('/', (req, res) => {
    const userInput = {};
    res.render('create', {
        userInput,
        title: 'Petstagram',
    });
});

createController.post('/',
    body(['name', 'age', 'description', 'location', 'imageUrl']).trim(),
    body('name')
        .notEmpty().withMessage('Name is required').bail()
        .isLength({ min: 2 }).withMessage(' must be at least 2 characters long'),
    body('age')
        .notEmpty().withMessage('Age is required').bail()
        .isInt({ min: 1, max: 100 }).withMessage('Age must be a number between 1 and 100'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ min: 5, max: 50 }).withMessage('Description must be between 5 and 50 characters long'),
    body('location')
        .notEmpty().withMessage('Location is required').bail()
        .isLength({ min: 5, max: 50 }).withMessage('Location must be between 5 and 50 characters long'),
    body('imageUrl')
        .notEmpty().withMessage('Link to image is required').bail()
        .isURL().withMessage('Invalid URL')
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('Link to image must starts with http:// or https://'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }
            const userId = res[userCookieName]._id;
            const newPub = await createData(userInput, userId);

            res.redirect('/catalog');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('create', {
                userInput,
                title: 'Petstagram',
            });
        }
    });

module.exports = { createController };