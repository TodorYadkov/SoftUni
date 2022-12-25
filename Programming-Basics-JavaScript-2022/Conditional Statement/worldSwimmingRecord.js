function swimming(input) {
    let recordInSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timeSecondsForOneMetter = Number(input[2]);

    let presumablyTime = distanceMeters * timeSecondsForOneMetter;
    let retardWaterTime = Math.floor((distanceMeters / 15)) * 12.50;
    let totalTime = presumablyTime + retardWaterTime;
    
    if (totalTime >= recordInSeconds) {
        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower."`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}
swimming(["55555.67","3017","5.03"])

