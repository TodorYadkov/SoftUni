const mongoose = require('mongoose');
const { nameDB, connectionStrDB } = require('./environment');

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionStrDB, {
     	    useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`Successfully connected to ${nameDB} database`);
    } catch (error) {
        console.log(`Error initialize ${nameDB} database`);
        console.error(error.message);
        process.exit(1);
    }
};