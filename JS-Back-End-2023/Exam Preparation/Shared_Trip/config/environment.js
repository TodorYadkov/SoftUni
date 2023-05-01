const serverPort = 3000;
const nameDB = 'sharedTrip';
const connectionStrDB = `mongodb://127.0.0.1:27017/${nameDB}`;
const jwtSecret = 'SDFGweqr2234@#$asdfASDkj@#$sdafij45asfas@#4';
const bcryptRounds = 10;
const userCookieName = 'userData';

module.exports = {
    serverPort,
    nameDB,
    connectionStrDB,
    jwtSecret,
    bcryptRounds,
    userCookieName,
};