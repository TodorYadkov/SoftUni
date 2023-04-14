const { deletePubById } = require('../services/publicationService.js');
const { errorHandler } = require('../util/errorHandler.js');

const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    try {
        await deletePubById(req.params.id);
        res.redirect('/gallery');
    } catch (error) {
        console.error(errorHandler(error));
    }
});

module.exports = { deleteController };