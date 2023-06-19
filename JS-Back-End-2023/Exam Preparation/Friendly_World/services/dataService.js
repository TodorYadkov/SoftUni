const { Animal } = require('../models/Animal.js');

const getLastThreeAdded = () => Animal.find().sort({ _id: -1 }).limit(3);

const getAllData = () => Animal.find();

const getDataById = (animalId) => Animal.findById(animalId);

const deleteDataById = (animalId) => Animal.findByIdAndDelete(animalId);

const updateDataById = (animalId, data) => {
    const { name, years, kind, imageUrl, need, location, description } = data;
    return Animal.findByIdAndUpdate(animalId, { name, years, kind, imageUrl, need, location, description }, { runValidators: true });
};

const createData = async (data, userId) => {
    const { name, years, kind, imageUrl, need, location, description } = data;
    const newData = await Animal.create({ name, years, kind, imageUrl, need, location, description, owner: userId });
    return newData;
};

const addDonation = async (userId, animalId) => Animal.updateOne({ _id: animalId }, { $push: { donations: userId } });

const getDataBySearch = (query) => Animal.find({ location: { $regex: new RegExp(query, 'gi') } });

module.exports = {
    getLastThreeAdded,
    getAllData,
    getDataById,
    deleteDataById,
    updateDataById,
    createData,
    addDonation,
    getDataBySearch,
};