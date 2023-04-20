const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getGameById, updateGame } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');


editController.get('/:id', async (req, res) => {
    const gameDetails = await getGameById(req.params.id).lean();
    res.render('edit', {
        gameDetails,
        title: 'Edit Page - Gaming Team',
        pageId: 'edit',
    });
});

editController.post('/:id',
    body(['platform', 'name', 'imageUrl', 'price', 'genre', 'description']).trim(),
    body('platform').notEmpty().withMessage('Select a valid option, the platform cannot be empty!'),
    body('name').notEmpty().withMessage('Name is required!').bail()
        .isLength({ min: 4 }).withMessage('Name must be at least 4 characters long!'),
    body('imageUrl').notEmpty().withMessage('Image is required!')
        .isURL().withMessage('Image URL is not correct - must start with "http://" or "https://"!').bail()
        .custom((value) => /^https?:\/\//gi.test(value)).withMessage('Image URL does not start with "http://" or "https://"!'),
    body('price').notEmpty().withMessage('Price is required!').bail()
        .isNumeric().withMessage('Price must be a number!').bail()
        .custom((value) => value >= 0).withMessage('Price must be a positive number!'),
    body('genre').notEmpty().withMessage('Genre is required!')
        .isLength({ min: 2 }).withMessage('Genre must be at least 2 characters long!'),
    body('description').notEmpty().withMessage('Description is required!').bail()
        .isLength({ min: 10 }).withMessage('Description must be at least 10 characters long!'),
    async (req, res) => {
        const gameDetails = req.body;
        const gameId = req.params.id;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }

            const { platform, name, imageUrl, price, genre, description } = gameDetails;
            const updatedGame = await updateGame(gameId, { platform, name, imageUrl, price, genre, description });

            res.redirect('/details/' + gameId);
        } catch (err) {
            const error = errorHandler(err).message;
            gameDetails._id = gameId;
            res.render('edit', {
                error,
                gameDetails,
                title: 'Edit Page - Gaming Team',
                pageId: 'edit',
            });
        }
    });

module.exports = { editController };