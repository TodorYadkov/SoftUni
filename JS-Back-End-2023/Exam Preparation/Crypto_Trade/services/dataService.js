const { query } = require('express');
const { Crypto } = require('../models/Crypto.js');

const getAllData = () => Crypto.find();

const getDataById = (id) => Crypto.findById(id);

const deleteDataById = (id) => Crypto.findByIdAndDelete(id);

const updateDataById = (id, data) => {
    const { name, imageUrl, price, description, payment } = data;
    const offerToEdit = { name, imageUrl, price, description, payment };

    return Crypto.findByIdAndUpdate(id, offerToEdit, { runValidators: true });
};

const createData = (data, userId) => {
    const { name, imageUrl, price, description, payment } = data;
    const newOffer = { name, imageUrl, price, description, payment, owner: userId };

    return Crypto.create(newOffer);
};

const isBought = async (userId, offerId) => {
    const offer = await getDataById(offerId);
    return offer.cryptoBuyer.includes(userId);
};

const buyCrypto = async (userId, offerId) => {
    const offer = await getDataById(offerId);
    if (offer.cryptoBuyer.includes(userId)) {
        throw new Error('Already bought!');
    }

    offer.cryptoBuyer.push(userId);
    await offer.save();
};

const getDataBySearch = (name, payment) => {
    const query = {};
    if (name) {
        query.name = { $regex: new RegExp(name, 'gi') };
    }
    if (payment) {
        query.payment = payment;
    }

    return Crypto.find(query);
};

module.exports = {
    getAllData,
    createData,
    getDataById,
    deleteDataById,
    updateDataById,
    getDataBySearch,
    isBought,
    buyCrypto,
};