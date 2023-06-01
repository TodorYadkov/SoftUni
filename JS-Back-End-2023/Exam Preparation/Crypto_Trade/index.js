const express = require('express');
const { serverPort } = require('./config/environment.js');
const expressConfig = require('./config/expressConfig.js');
const databaseConfig = require('./config/databaseConfig.js');
const routesConfig = require('./config/routesConfig.js');

(async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);

    app.listen(serverPort, () => console.log(`Server is runnig on port ${serverPort}`));
})();
