const { userCookieName } = require('../config/environment');
const { getOfferById, deleteOffer } = require('../services/dataService');
const errorHandler = require('../util/errorHandler');

const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    const offerId = req.params.id;
    try {
        const offer = await getOfferById(offerId).lean();
        if (offer.owner != res[userCookieName]._id) {
            throw new Error(`${res[userCookieName].name} is not the owner of the current offer`);
        }

        await deleteOffer(offerId);
        res.redirect('/catalog');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${offerId}`);
    }
});

module.exports = { deleteController };