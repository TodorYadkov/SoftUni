const { userCookieName } = require('../config/environment');
const { getTripById, deleteTrip } = require('../services/dataService');
const { errorHandler } = require('../util/errorHandler');

const deleteController = require('express').Router();

deleteController.get('/:id', async (req, res) => {
    const tripId = req.params.id;
    try {
        const trip = await getTripById(tripId).lean();
        const userId = res[userCookieName]._id;
        if (trip.creator != userId) {
            throw new Error(`${res[userCookieName].email} is not owner.`);
        }

        await deleteTrip(userId, tripId);
        res.redirect('/share-trips');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${tripId}`);
    }
});

module.exports = { deleteController };