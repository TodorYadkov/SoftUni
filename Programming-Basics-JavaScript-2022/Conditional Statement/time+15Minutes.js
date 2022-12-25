function time(input) {
    let hoursIn = Number(input[0]);
    let minutesIn = Number(input[1]);
    let hoursToMinute = hoursIn * 60;
    let addedTime = 15;
    let totalTimeMinutes = minutesIn + hoursToMinute + addedTime;
    let hours = Math.floor(totalTimeMinutes / 60);
    let minutes = totalTimeMinutes % 60;
    
    if (hours >= 24) {
        hours -= 24;
    } 
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else  {
        console.log(`${hours}:${minutes}`);
    }
    
}
time([23,59])