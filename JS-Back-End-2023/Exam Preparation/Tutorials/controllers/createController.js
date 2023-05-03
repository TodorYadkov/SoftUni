const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler');
const { createCourse } = require('../services/courseService');
const { userCookieName } = require('../config/environment');

createController.get('/', (req, res) => {
    const userInput = {};
    res.render('create', {
        userInput,
    });
});

createController.post('/',
    body(['title', 'description', 'imageUrl', 'duration']).trim(),
    body('title')
        .notEmpty().withMessage('Title is required').bail()
        .isLength({ min: 4 }).withMessage('Title must be at least 4 characters long'),
    body('description')
        .notEmpty().withMessage('Description is required').bail()
        .isLength({ min: 20 }).withMessage('Description must be at least 20 characters long'),
    body('imageUrl')
        .notEmpty().withMessage('Image url is required').bail()
        .isURL().withMessage('Invalid URL')
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('Image URL must start with http:// or https://'),
    body('duration')
        .notEmpty().withMessage('Duration is required').bail(),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            const newCourse = await createCourse(userInput, res[userCookieName]._id);
            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('create', { userInput });
        }
    });

module.exports = { createController };