const { getPubById, updatePubById } = require('../services/publicationService.js');
const { errorHandler } = require('../util/errorHandler.js');

const editController = require('express').Router();

editController.get('/:id', async (req, res) => {
    try {
        const publication = await getPubById(req.params.id).lean();

        res.render('edit', {
            publication,
            title: 'Edit Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message.join('\n'));
    }
});

editController.post('/:id', async (req, res) => {
    const publication = Object.assign(req.body, { _id: req.params.id });
    try {
        await updatePubById(req.params.id, publication);
        res.redirect(`/details/${req.params.id}`);
    } catch (error) {
        res.render('edit', {
            publication,
            title: 'Edit Page',
            error: errorHandler(error).message.join('\n'),
        });
    }
});
module.exports = { editController };