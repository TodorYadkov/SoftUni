function nameGame(input) {
    index = 0;
    let command = input[index];
    index++;
    let currentPlayer = "";
    let winner = "";
    let points = Number.MIN_SAFE_INTEGER;
    while (command !== "Stop") {
        let characterToNumber = "";
        let currentPlayerPoints = 0;
        if (isNaN(command)) {
            currentPlayer = command;
            characterToNumber = Number(command.length);
        }
        command = input[index];
        index++;
        if (command === "Stop") {
            break;
        }
        for (let i = 0; i < characterToNumber; i++) {
            command = Number(command);
            let currentCharacterNumber = currentPlayer.charCodeAt(i);
            if (currentCharacterNumber === command) {
                currentPlayerPoints += 10;
            } else {
                currentPlayerPoints += 2;
            }
            command = input[index];
            index++;
        }
        if (currentPlayerPoints >= points) {
            points = currentPlayerPoints;
            winner = currentPlayer;
        }
    }
    console.log(`The winner is ${winner} with ${points} points!`);
} nameGame(["Ivan",
"73",
"20",
"98",
"110",
"Ivo",
"80",
"65",
"87",
"Stop"])