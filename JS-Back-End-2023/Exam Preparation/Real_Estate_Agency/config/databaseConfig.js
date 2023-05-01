const mongoose = require('mongoose');
const errorHandler = require('../util/errorHandler');
const { nameDB, connectionStrDB } = require('./environment');

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionStrDB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`Successfully connected to the ${nameDB} database`);
    } catch (error) {
        console.error(`Error initialize database ${nameDB}`);
        console.error(errorHandler(error).message);
        process.exit(1);
    }
};