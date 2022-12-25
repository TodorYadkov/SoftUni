function skeleton(input) {
    let controlMinute = Number(input[0]);
    let timeControlSeconds = Number(input[1]);
    let lengthChuteMeters = Number(input[2]);
    let secondsOneHundredMeters = Number(input[3]);
    let minuteToSeconds = (controlMinute * 60) + timeControlSeconds;
    let lossTime = (lengthChuteMeters / 120) * 2.5;
    let timeMarin = (lengthChuteMeters / 100) * secondsOneHundredMeters - lossTime;

    if (timeMarin <= minuteToSeconds) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timeMarin.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(timeMarin-minuteToSeconds).toFixed(3)} second slower.`);
    }
}
skeleton([1,20,1546,12])