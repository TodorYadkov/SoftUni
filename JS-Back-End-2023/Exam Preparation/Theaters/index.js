const express = require('express');
const { serverPort } = require('./config/enviroments');
const expressConfig = require('./config/expressConfig');
const routesConfig = require('./config/routesConfig');
const databaseConfig = require('./config/databaseConfig');

(async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);

    app.listen(serverPort, () => console.log(`Server is running on port ${serverPort}`));
})();