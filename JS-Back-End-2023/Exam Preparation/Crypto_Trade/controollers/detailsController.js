const detailsController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { isLogged } = require('../middleware/guards.js');
const { getDataById, isBought, buyCrypto } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

detailsController.get('/:id', async (req, res) => {
    const offerId = req.params.id;
    try {
        const offerDetails = await getDataById(offerId).lean();
        if (res[userCookieName]) {
            offerDetails.isLogged = true;
            offerDetails.isOwner = res[userCookieName]._id == offerDetails.owner;
            offerDetails.hasBought = await isBought(res[userCookieName]._id, offerId);
        }

        res.render('details', {
            offerDetails,
            title: 'Details Page'
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${offerId}`);
    }
});

detailsController.get('/:id/buy', isLogged, async (req, res) => {
    const offerId = req.params.id;
    try {
        await buyCrypto(res[userCookieName]._id, offerId);
        res.redirect(`/details/${offerId}`);
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${offerId}`);
    }
});

module.exports = { detailsController };