function theMostPowerfulWord(input) {
    index = 0;
    let word = input[index];
    index++;
    let mostPowerfulWord = Number.MIN_SAFE_INTEGER;
    let winWord = "";
    while (word !== "End of words") {
        let currentWord = word;
        let numLetters = Number(currentWord.length);
        let currentPower = 0;
        for (let i = 0; i < numLetters; i++) {
            let currentLetter = Number(currentWord.charCodeAt(i));
            currentPower += currentLetter;
        }
        if (currentWord[0] === "A" || currentWord[0] === "E" ||
            currentWord[0] === "I" || currentWord[0] === "O" ||
            currentWord[0] === "U" || currentWord[0] === "Y" ||
            currentWord[0] === "a" || currentWord[0] === "e" ||
            currentWord[0] === "i" || currentWord[0] === "o" ||
            currentWord[0] === "u" || currentWord[0] === "y") {
            currentPower *= numLetters;
        } else {
            currentPower = Math.floor(currentPower / numLetters);
        }
        if (currentPower >= mostPowerfulWord) {
            winWord = currentWord;
            mostPowerfulWord = currentPower;
        }
        word = input[index];
        index++;
    }
    console.log(`The most powerful word is ${winWord} - ${mostPowerfulWord}`);
}theMostPowerfulWord(["But",
"Some",
"People",
"Say",
"It's",
"LOVE",
"End of words"])