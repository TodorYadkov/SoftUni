const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/cubicle';

async function initializeDB() {
    return mongoose.connect(connectionString);
};

module.exports = { initializeDB };