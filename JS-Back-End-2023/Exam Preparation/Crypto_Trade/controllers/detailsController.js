const detailsController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { getDataById, hasBought, buyCrypto } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');
const { isLogged } = require('../middleware/guards.js');

detailsController.get('/:id', async (req, res) => {
    const itemId = req.params.id;
    try {
        const itemDetails = await getDataById(itemId).lean();

        if (res[userCookieName]) {
            const userId = res[userCookieName]._id;
            itemDetails.isLogged = true;
            itemDetails.isOwner = userId == itemDetails.owner._id;
            itemDetails.hasBought = await hasBought(itemDetails._id, userId);
        }

        res.render('details', {
            itemDetails,
            title: 'Details Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${itemId}`);
    }
});

detailsController.get('/:id/buy', isLogged, async (req, res) => {
    const itemId = req.params.id;
    try {
        await buyCrypto(itemId, res[userCookieName]._id);
        res.redirect(`/details/${itemId}`);
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${itemId}`);
    }
});

module.exports = { detailsController };