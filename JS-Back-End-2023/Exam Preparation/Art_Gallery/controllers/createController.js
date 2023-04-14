const createController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { errorHandler } = require('../util/errorHandler.js');
const { createPub } = require('../services/publicationService.js');
const { userCookieName } = require('../config/environment.js');

createController.get('/', (req, res) => {
    const userInput = {};
    res.render('create', {
        userInput,
        title: 'Create Page',
    });
});

createController.post('/',
    body(['title', 'painting-tech', 'picture', 'certificate']).trim(),
    body('title').isLength({ min: 6 }).withMessage('The Title should be a minimum of 6 characters long!'),
    body('painting-tech').isLength({ max: 15 }).withMessage('The Painting technique should be a maximum of 15 characters long!'),
    body('certificate').custom((value) => {
        if (['yes', 'no'].includes(value.toLowerCase()) === false) {
            throw new Error('The Certificate of authenticity there must be value "Yes" or "No"');
        }
        return true;
    }),
    body('picture').custom((value) => {
        if (/^https?:\/\//i.test(value) === false) {
            throw new Error('Incorect URL - should start with http:// or https://');
        }
        return true;
    }),
    async (req, res) => {
        const userInput = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const userPub = {
                'title': userInput.title,
                'painting-tech': userInput['painting-tech'],
                'picture': userInput.picture,
                'certificate': userInput.certificate.toLowerCase() === 'yes' ? 'Yes' : 'No',
                'author': res[userCookieName]._id
            };

            const newPub = await createPub(userPub, res[userCookieName]._id);

            res.redirect('/gallery');
        } catch (error) {
            res.render('create', {
                userInput,
                title: 'Create Page',
                error: errorHandler(error).message.join('\n')
            });
        }
    });

module.exports = {
    createController,
};