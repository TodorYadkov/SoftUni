const { Crypto } = require('../models/Crypto.js');
const { User } = require('../models/User.js');

const getAllData = () => Crypto.find();

const getDataById = (dataId) => Crypto.findById(dataId);

const deleteDataById = (dataId) => Crypto.findByIdAndDelete(dataId);

const updateDataById = (dataId, data) => {
    const { name, imageUrl, price, description, payment } = data;
    return Crypto.findOneAndUpdate({_id: dataId}, { name, imageUrl, price, description, payment }, { runValidators: true });
};

const createData = async (data, userId) => {
    const { name, imageUrl, price, description, payment } = data;
    const newData = await Crypto.create({ name, imageUrl, price, description, payment, owner: userId });
    return newData;
};

const hasBought = (dataId, userId) => Crypto.findOne({ _id: dataId, buyerId: { $in: [userId] } });

const buyCrypto = (dataId, userId) => Crypto.updateOne({ _id: dataId }, { $push: { buyerId: userId } });

const getDataBySearch = (name, payment) => {
    const query = {};
    if (name) {
        query.name = { $regex: new RegExp(name, 'gi') };
    }
    if (payment) {
        query.payment = { $regex: new RegExp(payment, 'gi') };
    }

    return Crypto.find(query);
};

module.exports = {
    getAllData,
    getDataById,
    deleteDataById,
    updateDataById,
    createData,
    hasBought,
    buyCrypto,
    getDataBySearch,
};