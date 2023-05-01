const express = require('express');
const { serverPort } = require('./config/environment');
const expressConfig = require('./config/expressConfig');
const databaseConfig = require('./config/databaseConfig');
const routerConfig = require('./config/routerConfig');

(async function start() {

    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routerConfig(app);

    app.listen(serverPort, () => console.log(`Server is running on port ${serverPort}`));

})();