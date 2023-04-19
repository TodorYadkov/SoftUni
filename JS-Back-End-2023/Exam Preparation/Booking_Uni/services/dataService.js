const { Hotel } = require('../models/Hotel.js');
const { User } = require('../models/User.js');

const getAllHotels = () => Hotel.find().sort({ freeRooms: -1 });

const getHotelById = (hotelId) => Hotel.findById(hotelId);

const updateHotelById = (hotelId, data) => Hotel.findByIdAndUpdate(hotelId, data, { runValidators: true });

const getUserById = (userId) => User.findById(userId);

async function deleteHotel(hotelId, userId) {
    await Hotel.findByIdAndDelete(hotelId);
    await User.updateOne({ _id: userId }, { $pull: { userHotels: hotelId } });
}

async function checkIfBooked(userId, hotelId) {
    const [user, hotel] = await Promise.all([
        User.findById(userId),
        Hotel.findById(hotelId)
    ]);

    return hotel.bookedRooms.includes(userId) || user.bookedHotels.includes(hotelId);
}

async function bookHotel(userId, hotelId) {

    const [user, hotel] = await Promise.all([
        User.findById(userId),
        Hotel.findById(hotelId)
    ]);

    user.bookedHotels.push(hotelId);
    await user.save();

    hotel.bookedRooms.push(userId);
    hotel.freeRooms -= 1;
    await hotel.save();

    return user;
}

async function createHotel(userId, userInput) {
    const { hotelName, city, freeRooms, imageUrl } = userInput;
    const [newHotel, user] = await Promise.all([
        Hotel.create({ hotelName, city, freeRooms, imageUrl, ownerId: userId }),
        User.findById(userId)
    ]);

    user.userHotels.push(newHotel._id);
    await user.save();

    return newHotel;
}

module.exports = {
    createHotel,
    getAllHotels,
    getHotelById,
    updateHotelById,
    deleteHotel,
    checkIfBooked,
    bookHotel,
    getUserById,
};