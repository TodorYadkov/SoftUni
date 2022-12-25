function flightSchedule(array) {
    // First input first subArray into object
    let flightList = {};
    array[0].map(el => {
        let info = el.split(' ');
        let tokensFlight = info.shift();
        let tokensCity = info.join(' ');
        Object.assign(flightList, { [tokensCity]: tokensFlight });
    });

    // Set the status of every flight
    array[1].map(el => {
        let tokens = el.split(' ');
        Object.keys(flightList).find(city => flightList[city] === tokens[0] ? flightList[city] = tokens[1] : false);
    });
    Object.keys(flightList).map(flight => ((flightList[flight] !== 'Cancelled') &&
        (flightList[flight] !== 'Ready to fly')) ? flightList[flight] = 'Ready to fly' : false);

    // Print all flights with the given status
    let infoFlight = array[2].join('');
    if (infoFlight === 'Ready to fly') {
        for (let prop in flightList) {
            if (infoFlight === flightList[prop]) {
                console.log(`{ Destination: '${prop}', Status: '${flightList[prop]}' }`)
            }
        }
    } else {
        for (let prop in flightList) {
            if (infoFlight === flightList[prop]) {
                console.log(`{ Destination: '${prop}', Status: '${flightList[prop]}' }`)
            }
        }
    }
}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']]);
console.log('--------------------------------------------------------');
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']]);