const express = require('express');
const expressConfig = require('./config/expressConfig.js');
const databaseConfig = require('./config/databaseConfig.js');
const { serverPort } = require('./config/environment.js');
const routesConfig = require('./config/routesConfig.js');

(async function start() {
    const app = express();

    await databaseConfig();
    expressConfig(app);
    routesConfig(app);

    app.listen(serverPort, () => console.log(`Server is running on port ${serverPort}`));
})();