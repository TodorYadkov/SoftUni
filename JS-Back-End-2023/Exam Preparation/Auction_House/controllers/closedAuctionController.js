const closedAuctionController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { getAllClosedOffers, closeCurrentAuction } = require('../services/dataService.js');
const errorHandler = require('../util/errorHandler.js');

closedAuctionController.get('/:id', async (req, res) => {
    try {
        await closeCurrentAuction(req.params.id);
        res.redirect('/closed-auction');
    } catch (error) {
        console.log(errorHandler(error).message);
        res.redirect('/');
    }
});

closedAuctionController.get('/', async (req, res) => {
    try {
        const userId = res[userCookieName]._id;
        const closedAuctions = await getAllClosedOffers(userId).populate('bidder', ['firstName', 'lastName']).lean();
        
        if (closedAuctions.length != 0) {
            closedAuctions.forEach(objEl => {
                const lastIndex = objEl.bidder.length - 1;
                objEl.fullName = `${objEl.bidder[lastIndex].firstName} ${objEl.bidder[lastIndex].lastName}`;
            });
        }

        res.render('closedAuctions', {
            closedAuctions,
            title: 'Closed Auctions',
        });
    } catch (error) {
        console.log(errorHandler(error).message);
        res.redirect('/');
    }

});

module.exports = { closedAuctionController };