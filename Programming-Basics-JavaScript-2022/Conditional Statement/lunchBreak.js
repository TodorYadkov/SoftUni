function lunch(input) {
    let movieTitle = input[0];
    let timeMovie = Number(input[1]);
    let timeBreak = Number(input[2]);
    let timeToLunch = timeBreak / 8;
    let timeFree = timeBreak / 4;
    let totalTimeFree = timeBreak - timeToLunch -timeFree;
   
    if (totalTimeFree >= timeMovie) {
        console.log(`You have enough time to watch ${movieTitle} and left with ${Math.ceil(totalTimeFree - timeMovie)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(timeMovie - totalTimeFree)} more minutes.`);
    }
}
lunch(["Teen Wolf",
"48",
"60"])