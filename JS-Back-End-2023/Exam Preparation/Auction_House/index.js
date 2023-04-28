const express = require('express');
const { serverPort } = require('./config/environment.js');
const databaseConfig = require('./config/databaseConfig.js');
const expressConfig = require('./config/expressConfig.js');
const routesConfig = require('./config/routesConfig.js');

(async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);

    app.listen(serverPort, () => console.log(`Server is running on port ${serverPort}`));
})();