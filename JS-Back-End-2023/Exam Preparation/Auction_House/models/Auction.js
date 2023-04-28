const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLenght: [4, 'The title should be a minimum of 4 characters long'],
    },
    description: {
        type: String,
        required: true,
        maxLength: [200, 'The description should be a maximum of 200 characters long']
    },
    category: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value > 0,
            message: 'The price cannot be negative',
        }
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    bidder: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    isClosed: {
        type: Boolean,
        default: false,
    },
});

auctionSchema.pre('save', function (next,) {
    const validValue = ['vehicles', 'estate', 'electronics', 'furniture', 'other'];
    const index = validValue.findIndex((v) => v == this.category.toLocaleLowerCase());
    if (index == -1) {
        throw new Error('The category should be one of the following: Vehicles, Real Estate, Electronics, Furniture, Other');
    } else {
        const newValue = ['Vehicles', 'Real Estate', 'Electronics', 'Furniture', 'Other'];
        this.category = newValue[index];
    }

    next();
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = { Auction };