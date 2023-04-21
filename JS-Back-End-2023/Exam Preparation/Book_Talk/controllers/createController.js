const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { addNewBook } = require('../services/bookService.js');
const { userCookieName } = require('../config/environment.js');

createController.get('/', (req, res) => {
    const userInput = {};
    res.render('create', {
        userInput,
        title: 'Create Page',
    });
});

createController.post('/',
    body(['title', 'author', 'imageUrl', 'review', 'genre', 'stars']).trim(),
    body('title')
        .notEmpty().withMessage('Title is required').bail()
        .isLength({ min: 2 }).withMessage('The Title should be at least 2 characters'),
    body('author')
        .notEmpty().withMessage('Author is required').bail()
        .isLength({ min: 5 }).withMessage('The Author should be at least 5 characters'),
    body('genre')
        .notEmpty().withMessage('Genre is required').bail()
        .isLength({ min: 3 }).withMessage('The Genre should be at least 3 characters'),
    body('stars')
        .notEmpty().withMessage('Stars are required').bail()
        .isInt({ min: 1, max: 5 }).withMessage('Stars value must must be between1 and 5'),
    body('imageUrl')
        .notEmpty().withMessage('Image is required').bail()
        .isURL().withMessage('The image URL is not valid. Must start with http:// or https://').bail()
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('Image URL must start with http:// or https://'),
    body('review')
        .notEmpty().withMessage('Review is required').bail()
        .isLength({ min: 10 }).withMessage('The Review should be a minimum of 10 characters long'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }
            const userId = res[userCookieName]._id;
            const { title, author, imageUrl, review, genre, stars } = userInput;
            const newBook = await addNewBook({ title, author, imageUrl, review, genre, stars, owner: userId });

            res.redirect('/catalog');
        } catch (error) {
            const errors = errorHandler(error).message;
            res.render('create', {
                errors,
                userInput,
                title: 'Create Page',
            });
        }
    });

module.exports = { createController };