const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'Title must be at least 2 characters long'],
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\//gi.test(value),
            message: 'The Crypto Image URL must start with http:// or https://'
        }
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value > 0,
            message: 'The price must be a positive number!'
        },
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description must be at least 10 characters long'],
    },
    payment: {
        type: String,
        required: true,
        // enum: {
        //     values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
        //     message: '{VALUE} is not supported !',
        // },
        validate: {
            validator: (value) => {
                const validValues = ['Crypto-Wallet', 'Credit-Card', 'Debit-Card', 'PayPal'];
                const index = validValues.findIndex(v => v.toLocaleLowerCase() === value.toLocaleLowerCase());
                if (index !== -1) {
                    return validValues[index];
                }

                return false;
            }
        },
    },
    buyerId: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

function capitalizePayment(next) {
    if (this.payment) {
        this.payment = this.payment.toLocaleLowerCase() == 'paypal'
            ? 'PayPal'
            : this.payment.split('-').map(p => p[0].toUpperCase() + p.slice(1)).join('-');
    } else if (this._update.payment) {
        this._update.payment = this._update.payment.toLocaleLowerCase() == 'paypal'
            ? 'PayPal'
            : this._update.payment.split('-').map(p => p[0].toUpperCase() + p.slice(1)).join('-');
    }
    next();
}

cryptoSchema.pre('save', capitalizePayment);
cryptoSchema.pre('findOneAndUpdate', capitalizePayment);

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = { Crypto };