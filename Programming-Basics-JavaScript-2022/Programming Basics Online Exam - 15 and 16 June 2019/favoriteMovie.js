function favoriteMovie(input) {
    let index = 0;
    let movieName = input[index];
    index++;
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let countMovie = 0;
    let bestMovie = "";
    while (movieName !== "STOP") {
        let currPoints = 0;
        let movieLength = Number(movieName.length);
        countMovie++;
        if (countMovie === 7) {
            console.log("The limit is reached.");
            break;
        }
        for (let i = 0; i < movieLength; i++) {
            let currentLetter = movieName[i];
            let tempPoints = Number(currentLetter.charCodeAt(0));
            if (currentLetter === " ") {
                tempPoints = tempPoints;
            } else if (!isNaN(currentLetter)) {
                tempPoints = tempPoints;
            } else if (currentLetter.toUpperCase() === currentLetter) {
                tempPoints -= movieLength;
            } else if (currentLetter.toLowerCase() === currentLetter) {
                tempPoints -= (2 * movieLength);
            }
            currPoints += tempPoints;
        }
        if (currPoints > maxPoints) {
            maxPoints = currPoints;
            bestMovie = movieName;
        }
        movieName = input[index];
        index++;
    }
    console.log(`The best movie for you is ${bestMovie} with ${maxPoints} ASCII sum.`);
} 
favoriteMovie(["The maze","School story 2","Shrek 2","Ice age","STOP"])