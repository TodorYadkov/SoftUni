const { Play } = require('../models/Play');
const { User } = require('../models/User');

const createPlay = async (userInput, userId) => {
    const { title, description, imageUrl, isPublic } = userInput;
    const newPlay = await Play.create({ title, description, imageUrl, isPublic, author: userId });
    await User.updateOne({ _id: userId }, { $push: { myPlays: newPlay._id } });
    return newPlay;
};

const getGuestPlaysDSC = () => Play.aggregate([
    { $addFields: { countLikes: { $size: '$usersLiked' } } },
    { $match: { isPublic: true } },
    { $sort: { countLikes: -1 } },
    { $limit: 3 },
]);

const getUserPlayedPlays = () => Play.aggregate([
    { $addFields: { countLikes: { $size: '$usersLiked' } } },
    { $match: { isPublic: false } },
    { $sort: { created: -1 } }
]);

const getUserPlaysDSC = () => Play.aggregate([
    { $addFields: { countLikes: { $size: '$usersLiked' } } },
    { $match: { isPublic: true } },
    { $sort: { created: -1 } },
]);

const getPlayById = (playId) => Play.findById(playId);

const addLike = async (userId, playId) => {
    const hasLikeAlready = await User.findOne({ _id: userId });
    if (hasLikeAlready.likedPlays.includes(playId)) {
        throw new Error('You have already liked this play');
    }

    const isOwner = await Play.findOne({ author: userId });
    if (isOwner) {
        throw new Error('The owner can\'t like his own play');
    }

    await User.updateOne({ _id: userId }, { $push: { likedPlays: playId } });
    await Play.updateOne({ _id: playId }, { $push: { usersLiked: userId } });
};

const updatePlay = (userInput, playId) => {
    const { title, description, imageUrl, isPublic } = userInput;
    return Play.findByIdAndUpdate(playId, { title, description, imageUrl, isPublic }, { runValidators: true });
};

const deletePlay = async (playId, userId) => {
    const currentPlay = await Play.findById(playId).lean();
    if (currentPlay.author != userId) {
        throw new Error('403 Forbidden - The user is not the author of this play');
    }

    await Play.findByIdAndDelete(playId);
};

module.exports = {
    createPlay,
    getGuestPlaysDSC,
    getUserPlaysDSC,
    getUserPlayedPlays,
    getPlayById,
    updatePlay,
    deletePlay,
    addLike,
};