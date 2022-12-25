function movieDay(input) {
    let timePicture = Number(input[0]);
    let numScenе = Number(input[1]);
    let timeScene = Number(input[2]);
    let timeToPrepare = timePicture - (timePicture * .85);
    let neededTime = numScenе * timeScene + timeToPrepare;
    let diffTime = Math.abs(timePicture - neededTime);
    if (neededTime <= timePicture) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(diffTime)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(diffTime)} minutes.`);
    }
}
movieDay(["60",
"15",
"3"])