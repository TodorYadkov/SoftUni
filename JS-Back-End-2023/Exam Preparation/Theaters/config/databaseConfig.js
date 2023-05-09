const mongoose = require('mongoose');
const { errorHandler } = require('../util/errorHandler');
const { nameDB, connectionStrDB } = require('./enviroments');

module.exports = async (app) => {
    try {
        mongoose.connect(connectionStrDB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`Successfully connected to database ${nameDB}`);
    } catch (error) {
        console.error(`Error initialize ${nameDB} database`);
        console.error(errorHandler(error).message);
        process.exit(1);
    }
};