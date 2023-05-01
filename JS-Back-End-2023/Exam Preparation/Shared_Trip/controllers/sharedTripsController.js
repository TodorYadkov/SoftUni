const { getAllTrips } = require('../services/dataService');

const sharedTripsController = require('express').Router();

sharedTripsController.get('/', async (req, res) => {
    const allTrips = await getAllTrips().lean();
    res.render('shared-trips', {
        allTrips,
        title: 'Shared Trips',
    });
});

module.exports = { sharedTripsController };