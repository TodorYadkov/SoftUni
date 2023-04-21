const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getBookById, updateBookById } = require('../services/bookService.js');
const { errorHandler } = require('../util/errorHandler.js');


editController.get('/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const userInput = await getBookById(bookId).lean();
        res.render('edit', {
            userInput,
            title: 'Edit Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${bookId}`);
    }
});

editController.post('/:id',
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
        const bookId = req.params.id;
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            const { title, author, imageUrl, review, genre, stars } = userInput;
            const updatedBook = await updateBookById(bookId, { title, author, imageUrl, review, genre, stars });
            res.redirect(`/details/${bookId}`);
        } catch (error) {
            const errors = errorHandler(error).message;
            userInput._id = bookId;
            res.render('edit', {
                errors,
                userInput,
                title: 'Edit Page',
            });
        }
    });

module.exports = { editController };