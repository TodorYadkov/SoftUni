const mongoose = require('mongoose');
const { CONNECTION_STR, nameDB } = require('./environment.js');

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STR, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`Database ${nameDB} is connected!`);
    } catch (error) {
        console.error(`Error initializing database ${nameDB}`);
        console.error(error.message);
        process.exit(1);
    }
};