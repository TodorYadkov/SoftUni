const { Breed } = require('../models/Breed');
const { Cat } = require('../models/Cat');

const getCatById = (catId) => Cat.findById(catId);

const getAllCats = (searchStr) => Cat.find({ name: { $regex: new RegExp(searchStr, 'gi') }, hasShelter: false });

const addNewCat = (data) => Cat.create(data);

const addNewBreed = (userInput) => {
    const { breed } = userInput;
    return Breed.create({ breed });
};

const getAllBreeds = () => Breed.find();

const updateCat = (catId, data) => Cat.findByIdAndUpdate(catId, data, { runValidators: true, returnDocument: true });

const newCatShelter = (catId) => Cat.updateOne({ _id: catId }, { $set: { hasShelter: true } });

module.exports = {
    getAllCats,
    getCatById,
    addNewCat,
    addNewBreed,
    getAllBreeds,
    updateCat,
    newCatShelter,
};