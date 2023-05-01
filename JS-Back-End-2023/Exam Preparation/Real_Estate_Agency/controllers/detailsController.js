const detailsController = require('express').Router();
const { userCookieName } = require('../config/environment');
const { isLogged } = require('../middleware/guards');
const { getOfferById, rentHouse } = require('../services/dataService');
const errorHandler = require('../util/errorHandler');
const state = {};

detailsController.get('/:id', async (req, res) => {
    const offerId = req.params.id;
    try {
        const offerDetails = await getOfferById(offerId).populate('rentedHome', ['name']).lean();
        offerDetails.tenants = offerDetails.rentedHome.map(t => t.name).join(', ');
        
        const currentUser = res[userCookieName];
        if (currentUser) {
            const userId = res[userCookieName]._id;
            offerDetails.userId = userId;
            offerDetails.hasLogged = true;
            offerDetails.isOwner = userId == offerDetails.owner;
            offerDetails.isAvailablePlaces = offerDetails.availablePieces > 0;
            offerDetails.isAlreadyRent = offerDetails.rentedHome.some(t => t._id == userId);
            if (offerDetails.isAvailablePlaces == false && offerDetails.isAlreadyRent == true) {
                offerDetails.isAvailablePlaces = true;
            }
        }

        state.offerDetails = offerDetails;

        res.render('details', {
            offerDetails,
            title: 'Details Page',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/details/' + offerId);
    }
});

detailsController.get('/:id/rent', isLogged, async (req, res) => {
    const offerId = req.params.id;
    try {
        await rentHouse(offerId, state.offerDetails.userId);
        res.redirect(`/details/${offerId}`);
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/details/' + offerId);
    }
});

module.exports = { detailsController };