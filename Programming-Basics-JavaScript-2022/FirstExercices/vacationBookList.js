function vacation(input) {
    let numCurrentBookPages = Number(input[0]);
    let numPagesReadHour = Number(input[1]);
    let numDayReading = Number(input[2]);
    let timeAllToRead = numCurrentBookPages / numPagesReadHour;
    let timePerDayRead = timeAllToRead / numDayReading;
    console.log(timePerDayRead);
}
vacation([212,20,2])