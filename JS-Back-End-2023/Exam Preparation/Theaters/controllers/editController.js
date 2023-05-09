const editController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getPlayById, updatePlay } = require('../services/dataService');
const { errorHandler } = require('../util/errorHandler');

editController.get('/:id', async (req, res) => {
    const playId = req.params.id;
    try {
        const detailsPlay = await getPlayById(playId).lean();
        const userInput = detailsPlay;
        res.render('edit', {
            userInput,
            title: 'Express Retake Exam January 2019',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${playId}`);
    }
});

editController.post('/:id',
    body(['title', 'description', 'imageUrl']).trim(),
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('imageUrl').notEmpty().withMessage('Image URL is required'),
    async (req, res) => {
        const playId = req.params.id;
        const userInput = req.body;
        Object.assign(userInput, { _id: playId });
        try {
            const { errors } = validationResult(req);
            if (errors.length != 0) {
                throw errors;
            }
            if (userInput.isPublic) {
                userInput.isPublic = true;
            } else {
                userInput.isPublic = false;
            }

            const updatedPlay = await updatePlay(userInput, playId);
            res.redirect(`/details/${playId}`);
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('edit', {
                userInput,
                title: 'Express Retake Exam January 2019',
            });
        }
    });

module.exports = { editController };