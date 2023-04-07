const express = require('express');                                     // Load express
const hbs = require('express-handlebars').create({ extname: '.hbs' });  // Load Handlebars and set which extension to use
const { router } = require('./routes.js');                              // Import a router to handle each incoming request from the front end

const app = express();                                                  // Invoke express as a constructor function
app.use('/static', express.static('static'));                           // Set where to load static files from
app.use(express.urlencoded({ extended: false }));                       // Set express to handle incoming query parameters if extended is true - use an extended query parameter handling library
app.engine('.hbs', hbs.engine);                                         // Set extension in express                                
app.set('view engine', '.hbs');                                         // Choose which file to search for when using the rendering method in Express

app.use(router);                                                        // Load router

app.listen(3000, () => console.log('Server listen on port 3000'));      // Start server