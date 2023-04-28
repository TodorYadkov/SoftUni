const detailsController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { userCookieName } = require('../config/environment.js');
const { getOfferById, addNewBid } = require('../services/dataService.js');
const errorHandler = require('../util/errorHandler.js');
const { isLogged } = require('../middleware/guards.js');
// Create state object to save current user status between request
const userState = { offerDetails: null };

detailsController.get('/:id', async (req, res) => {
    const offerId = req.params.id;
    try {
        // Get current offer and get full name of the owner of this offer
        const offerDetails = await getOfferById(offerId).populate('author bidder', ['firstName', 'lastName']).lean();
        offerDetails.ownerName = `${offerDetails.author.firstName} ${offerDetails.author.lastName}`;
        // Get current user status
        const userInfo = res[userCookieName];
        // Check if the user is logged in
        if (userInfo) {
            // Get last index of the array of bidder
            const lastIndex = offerDetails.bidder.length - 1;
            // Check if is logged to show or hide all additional information
            offerDetails.isLogged = true;
            // Check is owner of the current offer
            offerDetails.isOwner = userInfo._id == offerDetails.author._id;
            // Check if the current user is with the best bid
            offerDetails.isBestBidder = offerDetails.bidder[lastIndex]?._id == userInfo._id;
            // Check if the bidder array is empty and if it's not get the name of best bidder
            if (offerDetails.bidder[lastIndex]) {
                offerDetails.bestBidderName = `${offerDetails.bidder[lastIndex].firstName} ${offerDetails.bidder[lastIndex].lastName}`;
            }
            // Get curent user id
            userState.userId = userInfo._id;
        }
        // Save current state
        userState.offerDetails = offerDetails;
        res.render('details', {
            offerDetails,
            title: 'Auction Details',
        });

    } catch (error) {
        res.locals.errors = errorHandler(error).message;
        res.render('details', { title: 'Auction Details', offerDetails: userState.offerDetails });
    }
});

detailsController.post('/:id', isLogged,
    body('placeBid')
        .trim()
        .notEmpty().withMessage('Bid amount is required').bail()
        .isNumeric().withMessage('Bid amount must be a number'),
    async (req, res) => {
        const offerId = req.params.id;
        try {
            const { errors } = validationResult(req);
            if (errors.length !== 0) {
                throw errors;
            }
            // Get new price and check is the higher than the current
            const newBid = Number(req.body.placeBid);
            if (!(newBid > userState.offerDetails.price)) {
                throw new Error('The new bid must be higher than the current bid!');
            }
            // Add new bid
            await addNewBid(offerId, userState.userId, newBid);
            res.redirect('/details/' + offerId);
        } catch (error) {
            res.locals.errors = errorHandler(error).message;
            res.render('details', { title: 'Auction Details', offerDetails: userState.offerDetails });
        }
    });

module.exports = { detailsController };