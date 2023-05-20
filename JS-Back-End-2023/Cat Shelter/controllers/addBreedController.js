const addBreedController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler');
const { addNewBreed } = require('../services/catServices');

addBreedController.get('/', (req, res) => {
    const userInput = {};
    res.render('addBreed', {
        userInput,
        title: 'Cat Shelter - Add Breed'
    });
});

addBreedController.post('/',
    body('breed').trim()
        .notEmpty().withMessage('Breed is required')
        .isLength({ min: 3 }).withMessage('Breed must be at least 3 characters long'),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }

            const newBreed = await addNewBreed(userInput);
            res.redirect('/');
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('addBreed', {
                userInput,
                title: 'Cat Shelter - Add Breed'
            });
        }
    });

module.exports = { addBreedController };