const { Ad } = require('../models/Ad');
const { User } = require('../models/User');

const createNewAd = async (userInput, userId) => {
    const { headline, location, companyName, companyDescription } = userInput;
    const newAd = await Ad.create({ headline, location, companyName, companyDescription, author: userId });
    const user = await User.findById(userId);
    user.myAds.push(newAd._id);
    await user.save();

    return newAd;
};

const getFirstThreeAds = () => Ad.find().limit(3);

const getAllAds = () => Ad.find();

const getAdById = (adId) => Ad.findById(adId);

const userApply = async (userId, adId) => Ad.updateOne({ _id: adId }, { $push: { usersApplied: userId } });

const updateAd = (adId, data) => {
    const { headline, location, companyName, companyDescription } = data;
    return Ad.findByIdAndUpdate(adId, { headline, location, companyName, companyDescription }, { runValidators: true });
};

const deleteAd = async (userId, adId) => {
    await User.updateOne({ _id: userId }, { $pull: { myAds: adId } });
    await Ad.findByIdAndDelete(adId);
};

const getBySearch = (search) => User.find({ email: { $regex: new RegExp(search, 'gi') } });

module.exports = {
    createNewAd,
    getAllAds,
    getFirstThreeAds,
    getAdById,
    updateAd,
    deleteAd,
    userApply,
    getBySearch,
};