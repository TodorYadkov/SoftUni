const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { getCourseById, updateCourse } = require('../services/courseService.js');

editController.get('/:id', async (req, res) => {
    const courseId = req.params.id;
    try {
        const userInput = await getCourseById(courseId).lean();

        res.render('edit', {
            userInput,
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${courseId}`);
    }
});

editController.post('/:id',
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
        const courseId = req.params.id;
        const userInput = Object.assign(req.body, { _id: courseId });
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            await updateCourse(courseId, userInput);
            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('edit', {
                userInput,
            });
        }
    });

module.exports = { editController };