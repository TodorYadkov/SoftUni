const deleteController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { deleteOffer, getOfferById } = require('../services/dataService.js');
const errorHandler = require('../util/errorHandler.js');

deleteController.get('/:id', async (req, res) => {
    const offerId = req.params.id;
    try {
        const offer = await getOfferById(offerId).lean();
        if (offer.author != res[userCookieName]._id) {
            console.log(`${res[userCookieName].firstName} ${res[userCookieName].lastName} is not the owner!`);
            res.redirect('/');
            return;
        }

        await deleteOffer(offerId);
        res.redirect('/catalog');
    } catch (error) {
        console.log(errorHandler(error).message);
        res.redirect('/');
    }
});

module.exports = { deleteController };