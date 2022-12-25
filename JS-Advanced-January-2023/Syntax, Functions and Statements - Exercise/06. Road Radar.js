function roadRadar(speed, area) {
    let trafficLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    if (trafficLimit[area] < speed) {
        let statusDriving = 'speeding';
        if (speed - trafficLimit[area] > 20 && speed - trafficLimit[area] <= 40) {
            statusDriving = 'excessive speeding';
        } else if (speed - trafficLimit[area] > 40) {
            statusDriving = 'reckless driving';
        }
        console.log(`The speed is ${speed - trafficLimit[area]} km/h faster than the allowed speed of ${trafficLimit[area]} - ${statusDriving}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${trafficLimit[area]} zone`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');