const mongoose = require('mongoose');
const { connectionStrDB, nameDB } = require('./environment.js');

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionStrDB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`Database ${nameDB} connected successfully!`);
    } catch (error) {
        console.log(`Error initialiazing database ${nameDB}`);
        console.error(error.message);
        process.exit(1);
    }
};