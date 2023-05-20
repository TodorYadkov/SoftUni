const express = require('express');
const { serverPort } = require('./config/environments');
const databaseConfig = require('./config/databaseConfig');
const expressConfig = require('./config/expressConfig');
const routesConfig = require('./config/routesConfig');

(async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);

    app.listen(serverPort, () => console.log(`Server is running on port ${serverPort}`));
})();