const express = require('express');                                        // Load express
const { initializeDB } = require('./config/database.js');
const { router } = require('./routes.js');                                 // Import a router to handle each incoming request from the front end

const app = express();                                                   // Invoke express as a constructor function
require('./config/handelbars')(app);
app.use('/static', express.static('static'));                              // Set where to load static files from
app.use(express.urlencoded({ extended: false }));                          // Set express to handle incoming query parameters if extended is true - use an extended query parameter handling library

app.use(router);                                                           // Load router

(async function startApp() {
    try {
        await initializeDB();
        app.listen(3000, () => console.log('Server listen on port 3000')); // Start server
    } catch (error) {
        console.log('Cannot connect to DB:', error);
    }
})();