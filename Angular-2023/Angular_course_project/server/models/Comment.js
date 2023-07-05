const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment: {
        type: String,
        required: [true, 'Comment is required'],
        minLength: [10, 'Comment must be at least ten characters long']
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };