function centuriesToMinutes(nCenturies) {
    console.log(`${nCenturies} centuries = ${nCenturies * 100} years = ${Math.floor((nCenturies * 100) * 365.2422)} days = ${(Math.floor((nCenturies * 100) * 365.2422)) * 24} hours = ${((Math.floor((nCenturies * 100) * 365.2422)) * 24) * 60} minutes`);
}
centuriesToMinutes(1);
centuriesToMinutes(5);