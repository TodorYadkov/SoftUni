const { Auction } = require('../models/Auction.js');

const getAllOffers = () => Auction.find({ isClosed: { $ne: true } });

const getAllClosedOffers = (userId) => Auction.find({ isClosed: true, author: userId });

const getOfferById = (offerId) => Auction.findById(offerId);

const deleteOffer = (offerId) => Auction.findByIdAndDelete(offerId);

const updateOffer = (offerId, data) => {
    const { title, category, imageUrl, price, description } = data;
    return Auction.findByIdAndUpdate(offerId, { title, category, imageUrl, price, description }, { runValidators: true });
};

const createOffer = (userId, data) => {
    const { title, category, imageUrl, price, description } = data;
    return Auction.create({ title, category, imageUrl, price, description, author: userId });
};

const addNewBid = async (offerId, userId, newPrice) => {
    const offer = await getOfferById(offerId);
    if (offer.price > newPrice) {
        throw new Error('New price must be higher than the current price!');
    }

    offer.price = newPrice;
    offer.bidder.push(userId);
    await offer.save();
    return offer;
};

const closeCurrentAuction = (offerId) => Auction.updateOne({ _id: offerId }, { isClosed: true });

module.exports = {
    getAllOffers,
    getAllClosedOffers,
    closeCurrentAuction,
    createOffer,
    getOfferById,
    updateOffer,
    deleteOffer,
    addNewBid,
};