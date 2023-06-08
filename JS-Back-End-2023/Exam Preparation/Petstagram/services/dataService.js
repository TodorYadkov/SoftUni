const { Photo } = require('../models/Photo.js');
const { User } = require('../models/User.js');

const getAllData = () => Photo.find();

const getDataById = (photoId) => Photo.findById(photoId);

const deleteDataById = (photoId) => Photo.findByIdAndDelete(photoId);

const updateDataById = (photoId, data) => {
    const { name, age, description, location, imageUrl } = data;
    return Photo.findByIdAndUpdate(photoId, { name, age, description, location, imageUrl }, { runValidators: true });
};
const createData = async (data, userId) => {
    const { name, age, description, location, imageUrl } = data;
    const newData = await Photo.create({ name, age, description, location, imageUrl, owner: userId });
    return newData;
};

const addComment = (photoId, comment) => Photo.updateOne({ _id: photoId }, { $push: { commentList: comment } });

const getUserPhotos = (userId) => Photo.find({ owner: userId });

const getUserInfo = (userId) => User.findById(userId);

module.exports = {
    getAllData,
    getDataById,
    deleteDataById,
    updateDataById,
    createData,
    addComment,
    getUserPhotos,
    getUserInfo,
};