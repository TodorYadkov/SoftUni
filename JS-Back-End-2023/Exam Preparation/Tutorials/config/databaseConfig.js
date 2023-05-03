const mongoose = require('mongoose');
const { nameDB, connectionStrDB } = require('./environment');
const { errorHandler } = require('../util/errorHandler');

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionStrDB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`Successfully connected to ${nameDB} databse`);
    } catch (error) {
        console.error(`Error initialize ${nameDB} database`);
        console.error(errorHandler(error).message);
        process.exit(1);
    }
};