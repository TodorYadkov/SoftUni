const { userCookieName } = require('../config/environment.js');
const { getPubById, sharePost, checkIsAlreadyShared } = require('../services/publicationService.js');
const { errorHandler } = require('../util/errorHandler.js');

const detailsController = require('express').Router();

detailsController.get('/:id', async (req, res) => {
    try {
        const publication = await getPubById(req.params.id).populate('author', 'username').lean();

        if (res[userCookieName] != undefined) {
            const isShared = await checkIsAlreadyShared(req.params.id, res[userCookieName]._id);
            publication.isLogged = true;
            publication.isOwner = res[userCookieName]._id == publication.author._id;
            publication.isShared = !isShared;
        }

        res.render('details', {
            publication,
            title: 'Deatils Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message.join('\n'));
    }
});

detailsController.get('/:id/share', async (req, res) => {
    try {
        await sharePost(req.params.id, res[userCookieName]._id);
        res.redirect('/');
    } catch (error) {
        console.error(errorHandler(error).message.join('\n'));
    }
});

module.exports = { detailsController };