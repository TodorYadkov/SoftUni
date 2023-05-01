const detailsController = require('express').Router();
const { userCookieName } = require('../config/environment');
const { isLogged } = require('../middleware/guards');
const { getTripById, joinTheTrip } = require('../services/dataService');
const { errorHandler } = require('../util/errorHandler');
const currentTripState = {};

detailsController.get('/:id', async (req, res) => {
    try {
        const tripId = req.params.id;
        const tripDetails = await getTripById(tripId).populate('buddies creator', ['email']).lean();
        tripDetails.companion = tripDetails.buddies.map(b => b.email).join(', ');

        const user = res[userCookieName];
        if (user) {
            tripDetails.isLogged = true;
            tripDetails.isOwner = user._id == tripDetails.creator._id;
            tripDetails.isAvailableSeat = tripDetails.seats > 0;
            tripDetails.isAlreadyJoin = tripDetails.buddies.some(b => b._id == user._id);
            if (tripDetails.isAvailableSeat === false && tripDetails.isAlreadyJoin === true) {
                tripDetails.isAvailableSeat = true;
            }
        }
        currentTripState.tripDetails = tripDetails;
        res.render('details', {
            tripDetails,
            title: 'Details Trip',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/share-trips');
    }
});

detailsController.get('/:id/join', isLogged, async (req, res) => {
    const tripId = req.params.id;
    try {
        if (currentTripState.tripDetails.seats === 0) {
            throw new Error('There are not enough seats');
        }
        const userId = res[userCookieName]._id;
        await joinTheTrip(userId, tripId);
        res.redirect(`/details/${tripId}`);
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${tripId}`);
    }
});

module.exports = { detailsController };