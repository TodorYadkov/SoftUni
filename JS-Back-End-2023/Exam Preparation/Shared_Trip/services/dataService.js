const { Trip } = require('../models/Trip');
const { User } = require('../models/User');

const getAllTrips = () => Trip.find();

const getTripById = (tripId) => Trip.findById(tripId);

const createTrip = async (userInput, userId) => {
    const { startPoint, endPoint, date, time, carImage, carBrand, seats, price, description } = userInput;
    const newTrip = await Trip.create({ startPoint, endPoint, date, time, carImage, carBrand, seats, price, description, creator: userId });
    await User.updateOne({ _id: userId }, { $push: { tripsHistory: newTrip._id } });
    return newTrip;
};

const joinTheTrip = (userId, tripId) => Trip.updateOne({ _id: tripId }, { $inc: { seats: -1 }, $push: { buddies: userId } });

const deleteTrip = async (userId, tripId) => {
    await Trip.findByIdAndDelete(tripId);
    await User.updateOne({ _id: userId }, { $pull: { tripsHistory: tripId } });
};

const updateTrip = (tripId, data) => {
    const { startPoint, endPoint, date, time, carImage, carBrand, seats, price, description } = data;
    return Trip.findByIdAndUpdate(tripId, { startPoint, endPoint, date, time, carImage, carBrand, seats, price, description });
};

const getUserDataById = (userId) => User.findById(userId);

module.exports = {
    createTrip,
    getAllTrips,
    getTripById,
    deleteTrip,
    updateTrip,
    joinTheTrip,
    getUserDataById,
};