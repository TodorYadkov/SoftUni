const { Housing } = require('../models/Housing');

const getLastThreeAdded = () => Housing.find().sort({ _id: -1 }).limit(3);

const getAllOffers = () => Housing.find();

const getOfferById = (offerId) => Housing.findById(offerId);

const deleteOffer = (offerId) => Housing.findByIdAndDelete(offerId);

const updateOffer = (offerId, userInput) => {
    const { name, type, year, city, imageHome, description, availablePieces } = userInput;
    return Housing.findByIdAndUpdate(offerId, { name, type, year, city, imageHome, description, availablePieces });
};

const createHome = (userInput, userId) => {
    const { name, type, year, city, imageHome, description, availablePieces } = userInput;
    return Housing.create({ name, type, year, city, imageHome, description, availablePieces, owner: userId });
};

const rentHouse = (offerId, userId) => Housing.updateOne({ _id: offerId }, { $push: { rentedHome: userId }, $inc: { availablePieces: -1 } });

const getOfferBySearch = (string) => Housing.find({ type: { $regex: new RegExp(string, 'gi') } });

module.exports = {
    createHome,
    getLastThreeAdded,
    getAllOffers,
    getOfferById,
    updateOffer,
    deleteOffer,
    rentHouse,
    getOfferBySearch,
};