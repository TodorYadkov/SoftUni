function gameNumberWars(input) {
    let index = 0;
    let nameFirstPlayer = input[index];
    index++;
    let nameSecondPlayer = input[index];
    index++;
    let pointsFirstPlayer = 0;
    let pointsSecondPlayer = 0;
    let command = input[index];
    index++;
    while (command !== "End of game") {
        let temporaryPoint = 0;
        let firstPlayerCard = Number(command);
        command = input[index];
        index++;
        let secondPlayerCard = Number(command);
        command = input[index];
        index++;
        temporaryPoint = Math.abs(firstPlayerCard - secondPlayerCard);
        if (firstPlayerCard > secondPlayerCard) {
            pointsFirstPlayer += temporaryPoint;
        } else if (secondPlayerCard > firstPlayerCard) {
            pointsSecondPlayer += temporaryPoint;
        } else if (firstPlayerCard === secondPlayerCard) {
            let winner = "";
            let winnerPoint = 0;
            index--;
            firstPlayerCard = Number(input[index]);
            index++;
            secondPlayerCard = Number(input[index]);
            index++;
            if (firstPlayerCard > secondPlayerCard) {
                winner = nameFirstPlayer;
                winnerPoint = pointsFirstPlayer;
            } else if (secondPlayerCard > firstPlayerCard) {
                winner = nameSecondPlayer;
                winnerPoint = pointsSecondPlayer;
            }
            console.log("Number wars!");
            console.log(`${winner} is winner with ${winnerPoint} points`);
            break;
        }
        if (command === "End of game") {
            console.log(`${nameFirstPlayer} has ${pointsFirstPlayer} points`);
            console.log(`${nameSecondPlayer} has ${pointsSecondPlayer} points`);
            break;
        }
    }
    
}gameNumberWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"])