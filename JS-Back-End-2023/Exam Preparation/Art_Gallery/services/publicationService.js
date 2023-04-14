const { Publication } = require('../models/Publication.js');
const { User } = require('../models/User.js');

const getAllPublications = () => Publication.find();

const getSharedPubOfUser = (userId) => Publication.find({ usersShared: userId }, 'title');

const getPubById = (pubId) => Publication.findById(pubId);

const getUserById = (userId) => User.findById(userId);

const deletePubById = (pubId) => Publication.findByIdAndDelete(pubId);

const updatePubById = (pubId, data) => Publication.findByIdAndUpdate(pubId, data, { runValidators: true });

async function createPub(userInput, userId) {
    const [newPub, currentUser] = await Promise.all([
        Publication.create(userInput),
        getUserById(userId)
    ]);
    currentUser['my-publications'].push(newPub._id);
    await currentUser.save();

    return newPub;
}

async function sharePost(pubId, userId) {
    const currentPub = await getPubById(pubId);
    if (currentPub.usersShared.includes(userId)) {
        throw new Error('The user has already shared it!');
    }

    currentPub.usersShared.push(userId);
    await currentPub.save();
}

async function checkIsAlreadyShared(pubId, userId) {
    const currentPub = await getPubById(pubId);
    return currentPub.usersShared.includes(userId);
}

module.exports = {
    createPub,
    getAllPublications,
    getPubById,
    getUserById,
    deletePubById,
    updatePubById,
    sharePost,
    checkIsAlreadyShared,
    getSharedPubOfUser,
};