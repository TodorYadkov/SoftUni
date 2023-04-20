const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [4, 'Name must be at least 4 characters long!']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\//gi.test(value),
            message: 'Image URL must start with "http://" or "https://"'
        }
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value > 0,
            message: 'The price must be a positive number!'
        }
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description mus be at least 10 characters long!']
    },
    genre: {
        type: String,
        required: true,
        minLength: [2, 'Genre must be at least 2 characters long!']
    },
    platform: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                const validValues = ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'];
                const index = validValues.findIndex(v => v.toLocaleLowerCase() === value.toLocaleLowerCase());
                if (index !== -1) {
                    return validValues[index];
                }

                return false;
            }
        }
    },
    boughtBy: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

gameSchema.pre('save', function (next) {
    const validValues = ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'];
    const index = validValues.findIndex(v => v.toLocaleLowerCase() === this.platform.toLocaleLowerCase());
    if (index !== -1) {
        this.platform = validValues[index];
    }

    next();
});

const Game = mongoose.model('Game', gameSchema);

module.exports = { Game };