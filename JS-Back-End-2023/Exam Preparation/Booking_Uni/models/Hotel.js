const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotelName: {
        type: String,
        required: true,
        unique: true,
        minLength: [4, 'Name must be at least 4 characters long!'],
    },
    city: {
        type: String,
        required: true,
        minLength: [3, 'City must be at least 3 characters long!'],
    },
    freeRooms: {
        type: Number,
        min: [1, 'The number of rooms must be between 1 and 100'],
        max: [100, 'The number of rooms must be between 1 and 100'],
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\//gi.test(value),
            message: 'Image link must start with http:// or https://'
        }
    },
    bookedRooms: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = { Hotel };