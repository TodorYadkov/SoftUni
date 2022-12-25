function guessANumber() {
    const readline = require("node:readline");
    const { stdin: input, stdout: output } = require("node:process");
    const rl = readline.createInterface({ input, output });

    let isWin = false;
    let isCorrectNumber = true;
    let playerNumber = 0;
    let playerCountMoveTotal = 0;
    let guessedNumbers = 0;
    let playerCountMoveCurrent = 0;
    let hintCounter = 0;
    let nextHint = 5;
    let difficult = 100;
    // computer number
    let computerNumber = Math.floor(Math.random() * difficult);
    guessedNumbers++;
    // make a recursive function to get the player number and check if the computer number is equal to the player's
    let recursiveAsyncReadLine = function () {
        // get the player number
        rl.question(`Guess the number (0-${difficult}): `, (answer) => {
            playerNumber = Number(answer);
            hintCounter++;
            playerCountMoveTotal++;
            playerCountMoveCurrent++;
            // check if the number is correct
            if (isNaN(answer) || !(playerNumber >= 0 && playerNumber <= difficult)) {
                console.log("Invalid input! Try again...");
                isCorrectNumber = false;
                hintCounter = 0;
            } else {
                // if the number is correct, make different cases to navigate the player to find a computer number
                let message = "";
                isCorrectNumber = true
                if (playerNumber === computerNumber) {
                    // print current game result and that is the win situation
                    console.log(`You guess it!\nYou guess the number with ${playerCountMoveCurrent} moves`);
                    playerCountMoveCurrent = 0;
                    hintCounter = 0;
                    isWin = true;
                } else if (playerNumber - computerNumber >= 2 && playerNumber - computerNumber <= 3) {
                    message = "You are so close!";
                    hintCounter = 0;
                } else if (playerNumber - computerNumber > 0 && playerNumber - computerNumber <= 1) {
                    message = "Come on you almost know it!";
                    hintCounter = 0;
                } else if (computerNumber - playerNumber >= 2 && computerNumber - playerNumber <= 3) {
                    message = "You are so close!";
                    hintCounter = 0;
                } else if (computerNumber - playerNumber > 0 && computerNumber - playerNumber <= 1) {
                    message = "Come on you almost know it!";
                    hintCounter = 0;
                } else if (playerNumber < computerNumber) {
                    message = "Up!";
                } else if (playerNumber > computerNumber) {
                    message = "Down!";
                }
                // print message
                if (message) console.log(message);
            }
            // prompt for a new game
            if (isWin) {
                isWin = false;
                wannaPlayAgain();
            }
            // help the player to find a number
            if (hintCounter === nextHint && isCorrectNumber) {
                hintCounter = 0;
                // each time the player uses or does not use a hint - add two more moves
                nextHint += 2;
                // recursive function to call while the player is entering the wrong input
                let recursiveHint = () => {
                    rl.question("Do you want a hint? (Y|N) --> ", (hint) => {
                        hint = hint.toLocaleUpperCase();
                        if (hint === "Y") {
                            if (playerNumber + computerNumber > difficult) {
                                let minNumber = Math.min(playerNumber, computerNumber);
                                let maxNumber = Math.max(playerNumber, computerNumber);
                                console.log(`Your current number and computer number make this: ${maxNumber - minNumber} (- or +)`);
                            } else if (playerNumber + computerNumber >= 0 && playerNumber + computerNumber <= difficult) {
                                console.log(`Your current number and computer number make this: ${computerNumber + playerNumber} (+ or -)`);
                            }
                        } else if (hint === "N") {
                            // invoke the function to get the player number
                            recursiveAsyncReadLine();
                        } else {
                            // print a message if the player enters incorrect input - invoke the function again
                            console.log("Invalid input! Try again...");
                            recursiveHint();
                        }
                        // if the player uses the hint, invoke the function to get the player's number
                        recursiveAsyncReadLine();
                    });
                };
                // invoke the function
                recursiveHint();
            }
            recursiveAsyncReadLine();
        });
    };
    recursiveAsyncReadLine();
    // new game or end the game
    function wannaPlayAgain() {
        rl.question("Would you like to play again? (Y|N) --> ", (playAgain) => {
            playAgain = playAgain.toLocaleLowerCase();
            if (playAgain === "y") {
                difficult += 100;
                console.log(`Now you have to guess a number from 0-${difficult}`);
                computerNumber = Math.floor(Math.random() * difficult);
                guessedNumbers++;
                recursiveAsyncReadLine();
            } else if (playAgain === "n") {
                console.log(`You guessed ${guessedNumbers} numbers with a total number of suggestions: ${playerCountMoveTotal}\nHave a nice day!`);
                return rl.close();
            } else {
                console.log("Invalid input! Try again...");
                wannaPlayAgain();
            }
        });
    }
}
guessANumber();