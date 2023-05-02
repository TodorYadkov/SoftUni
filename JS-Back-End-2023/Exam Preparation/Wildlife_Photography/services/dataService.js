const { Data } = require('../models/Data.js');
const { User } = require('../models/User.js');

const getAllData = () => Data.find();

const getDataById = (dataId) => Data.findById(dataId);

const deleteDataById = (dataId) => Data.findByIdAndDelete(dataId);

const updateDataById = (dataId, data) => {
    const { title, keyword, location, dateCreation, imageUrl, description } = data;
    return Data.findByIdAndUpdate(dataId, { title, keyword, location, dateCreation, imageUrl, description }, { runValidators: true });
};

const createData = async (data, userId) => {
    const { title, keyword, location, dateCreation, imageUrl, description } = data;
    const newData = await Data.create({ title, keyword, location, dateCreation, imageUrl, description, author: userId });
    await User.updateOne({ _id: userId }, { $push: { myPosts: newData._id } });
    return newData;
};

const addVoteOnPost = (dataId, userId, vote) => Data.updateOne({ _id: dataId }, { $push: { votesOnPost: userId }, $inc: { rating: vote } });

const getMyPost = (userId) => User.findById(userId).populate('myPosts', ['imageUrl','keyword','title','rating']);

module.exports = {
    getAllData,
    getDataById,
    deleteDataById,
    updateDataById,
    createData,
    addVoteOnPost,
    getMyPost,
};