function lettersChangeNumbers(input) {
    let arr = input.split(' ');
    let sum = 0;
    // Main loop
    while (arr.length > 0) {
        // get cuurrent game information
        let currentGame = arr.shift();
        // check if currentGame is empty string
        if (currentGame === '') {
            continue;
        }
        // create needed variable and get letter and numbers for begining a game
        let firstSum = 0;
        let secondSum = 0;
        let firstLetter = currentGame.substring(0, 1);
        let lastLetter = currentGame.substring(currentGame.length - 1);
        let number = Number(currentGame.substring(1, currentGame.length - 1));
        // check for upper and lowercase letter and invoke needed function
        if (firstLetter === firstLetter.toLocaleUpperCase()) {
            firstSum = divide(firstLetter, number);
        } else {
            firstSum = multiply(firstLetter, number);
        }

        if (lastLetter === lastLetter.toLocaleUpperCase()) {
            secondSum = subtract(lastLetter, firstSum);
        } else {
            secondSum = add(lastLetter, firstSum);
        }
        // get final result
        sum += secondSum;
    }

    // print final result
    console.log(sum.toFixed(2));

    // function
    function add(letter, number) {
        let result = number + getLetterNumber(letter);
        return result;
    }

    function subtract(letter, number) {
        let result = number - getLetterNumber(letter);
        return result;
    }

    function multiply(letter, number) {
        let result = number * getLetterNumber(letter);
        return result;
    }

    function divide(letter, number) {
        let result = number / getLetterNumber(letter);
        return result;
    }
    // get the number of letter from alphabet
    function getLetterNumber(letter) {
        letter = letter.toLocaleLowerCase();
        let number = Number(letter.charCodeAt() - 96);
        return number;
    }
}
lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');