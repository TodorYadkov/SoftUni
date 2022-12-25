function cardGame(input) {
    let playerList = {};
    let powerOfCards = new Map();
    let multiplierOfCards = new Map();
    let stringPowerOfCard = ('2,2;3,3;4,4;5,5;6,6;7,7;8,8;9,9;10,10;J,11;Q,12;K,13;A,14');
    let stringMultiplierOfCards = ('S,4;H,3;D,2;C,1');
    stringPowerOfCard
        .split(';')
        .map(el => el.split(','))
        .forEach(el => {
            powerOfCards.set(el[0], Number(el[1]));
        });
    stringMultiplierOfCards
        .split(';')
        .map(el => el.split(','))
        .forEach(el => {
            multiplierOfCards.set(el[0], Number(el[1]));
        });

    for (let i = 0; i < input.length; i++) {
        let currentGame = input[i].split(': ');
        let currentPlayer = currentGame[0];
        let currentCard = currentGame[1].split(', ');

        if (!playerList.hasOwnProperty(currentPlayer)) {
            playerList[currentPlayer] = [];
        }
        currentCard.forEach(el => {
            if (!playerList[currentPlayer].includes(el)) {
                playerList[currentPlayer].push(el);
            }
        });
    }

    for (let el in playerList) {
        let currentCard = playerList[el];
        let finalPoint = 0;
        while (currentCard.length > 0) {
            let tempCard = currentCard.shift().split('');
            let secondNum = tempCard.pop();
            let firstNum = tempCard.join('');
    
            firstNum = powerOfCards.get(firstNum);
            secondNum = multiplierOfCards.get(secondNum);

            finalPoint += firstNum * secondNum;
        }
        playerList[el] = finalPoint;
    }
    for (let el in playerList) {
        console.log(`${el}: ${playerList[el]}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD']);