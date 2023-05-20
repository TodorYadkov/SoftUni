const serverPort = 3000;
const nameDB = 'catShelter';
const connectionStrDB = `mongodb://127.0.0.1:27017/${nameDB}`;

module.exports = {
    serverPort,
    nameDB,
    connectionStrDB,
};