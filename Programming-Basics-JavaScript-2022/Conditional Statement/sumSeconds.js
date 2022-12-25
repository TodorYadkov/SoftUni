function seconds(input) {
    let firstSeconds = Number(input[0]);
    let secondSeconds = Number(input[1]);
    let thirdSeconds = Number(input[2]);

    let totalTimeSeconds = firstSeconds + secondSeconds + thirdSeconds;
    let minute = Math.floor(totalTimeSeconds / 60);
    let seconds = totalTimeSeconds % 60;

    if (seconds >= 10) {
        console.log(`${minute}:${seconds}`);
    } else {
        console.log(`${minute}:0${seconds}`);
    }
}
seconds(["35","45","44"])
