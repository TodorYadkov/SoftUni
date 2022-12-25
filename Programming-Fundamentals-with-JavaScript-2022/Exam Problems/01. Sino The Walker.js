function sinoTheWalker(input) {
    let [hours, minutes, seconds] = input.shift().split(':');
    let steps = Number(input.shift())  % 86400;
    let timeStepsSeconds = Number(input.shift()) % 86400;

    let timeToWalkSeconds = (steps * timeStepsSeconds);
    let totalTimeSeconds = ((Number(hours) * 60) * 60) + (Number(minutes) * 60) + Number(seconds) + timeToWalkSeconds;

    hours = Math.floor(totalTimeSeconds / 3600);
    minutes = Math.floor(totalTimeSeconds % 3600 / 60);
    seconds = Math.floor(totalTimeSeconds % 3600 % 60);

    while (hours > 23) {
        hours -= 24;
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    console.log(`Time Arrival: ${hours}:${minutes}:${seconds}`);
}

// sinoTheWalker(['12:30:30', 90, 1]);
// sinoTheWalker(['23:49:13', 5424, 2]);