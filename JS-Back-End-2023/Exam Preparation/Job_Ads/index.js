const express = require('express');
const { servePort } = require('./config/environment');
const expressConfig = require('./config/expressConfig');
const routesConfig = require('./config/routesConfig');
const databaseConfig = require('./config/databaseConfig');

(async function start() {

    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);

    app.listen(servePort, () => console.log(`Server is running on port ${servePort}`));

})();