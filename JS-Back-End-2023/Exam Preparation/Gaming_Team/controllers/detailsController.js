const detailsController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { isLogged } = require('../middleware/guards.js');
const { getGameById, hasBought, buyGame } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

detailsController.get('/:id', async (req, res) => {
    try {
        const gameDetails = await getGameById(req.params.id).lean();
        if (res[userCookieName]) {
            gameDetails.isLogged = res[userCookieName];
            gameDetails.isOwner = res[userCookieName]._id == gameDetails.owner;
            gameDetails.isBought = await hasBought(res[userCookieName]._id, gameDetails._id);
        }

        res.render('details', {
            gameDetails,
            title: 'Details Page',
            pageId: 'details',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${req.params.id}`);
    }
});

detailsController.get('/:id/buy', isLogged, async (req, res) => {
    try {
        await buyGame(req.params.id, res[userCookieName]._id);
        res.redirect(`/details/${req.params.id}`);
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${req.params.id}`);
    }
});

module.exports = { detailsController };