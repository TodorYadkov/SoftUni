const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler');
const { createPlay } = require('../services/dataService');
const { userCookieName } = require('../config/enviroments');

createController.get('/', (req, res) => {
    const userInput = {};
    res.render('create', {
        userInput,
        title: 'Express Retake Exam January 2019',
    });
});

createController.post('/',
    body(['title', 'description', 'imageUrl']).trim(),
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('imageUrl').notEmpty().withMessage('Image URL is required'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }
            
            if (userInput.isPublic) {
                userInput.isPublic = true;
            }

            const newPlay = await createPlay(userInput, res[userCookieName]._id);
            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('create', {
                userInput,
                title: 'Express Retake Exam January 2019',
            });
        }
    });

module.exports = { createController };