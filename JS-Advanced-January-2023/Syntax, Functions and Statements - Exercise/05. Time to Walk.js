function timeToWalk(steps, distanceMeters, speedKmH) {
    let distanceToUniversityKm = (distanceMeters * steps) / 1000;
    let timeToUniversity = distanceToUniversityKm / speedKmH;

    let timeHours = Math.trunc(timeToUniversity);
    let timeMinutes = Math.trunc(Number(((timeToUniversity - Math.trunc(timeToUniversity)) * 60).toFixed(2)));
    let timeSeconds = Math.ceil(Number(((Number(((timeToUniversity - Math.trunc(timeToUniversity)) * 60).toFixed(2)) - timeMinutes) * 60).toFixed(2)));

    let delay = Math.floor(distanceToUniversityKm / 0.5);
    if (delay >= 60) {
        let tempHours = Math.trunc(delay / 60);
        let tempMinutes = Number((((delay / 60) - tempHours) * 60).toFixed(2));
        timeHours += tempHours;
        tempMinutes += timeMinutes;
        if (tempMinutes >= 60) {
            tempHours = Math.trunc(tempMinutes / 60);
            tempMinutes = Number((((tempMinutes / 60) - tempHours) * 60).toFixed(2));
            timeHours += tempHours;
            timeMinutes = tempMinutes;
        } else {
            timeMinutes += tempMinutes;
        }
    } else {
        timeMinutes += delay;
    }

    if (timeHours < 10) {
        timeHours = '0' + timeHours;
    }

    if (timeMinutes < 10) {
        timeMinutes = '0' + timeMinutes;
    }

    if (timeSeconds < 10) {
        timeSeconds = '0' + timeSeconds;
    }

    console.log(`${timeHours}:${timeMinutes}:${timeSeconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
timeToWalk(2564, 0.11, 5.5);

