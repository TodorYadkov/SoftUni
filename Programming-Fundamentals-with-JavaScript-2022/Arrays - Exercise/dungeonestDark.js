function dungeonestDark(commandArray) {
    let health = 100;
    let coins = 0;
    let test = commandArray.toString();
    let tempWord = '';
    let tempPoints = '';
    let realWord = '';
    let countRooms = 0;
    let isAlive = true;
    for (let i = 0; i < test.length; i++) {
        if (!isAlive) {
            break;
        }
        if (test[i] !== '|') {
            if (test[i] === ' ') {
                realWord = tempWord;
            }
            tempWord += test[i];
            if (!isNaN(test[i])) {
                tempPoints += test[i];
                tempPoints = Number(tempPoints);
            }
        }
        if (test[i] === '|' || test.length - 1 === i) {
            countRooms++;
            switch (realWord) {
                case 'potion':
                    health += tempPoints;
                    if (health >= 100) {
                        tempPoints = tempPoints - (health - 100);
                        health = 100;
                    }
                    console.log(`You healed for ${tempPoints} hp.\nCurrent health: ${health} hp.`);
                    break;
                case 'chest':
                    coins += tempPoints;
                    console.log(`You found ${tempPoints} coins.`);
                    break;
                default:
                    health -= tempPoints;
                    if (health <= 0) {
                        console.log(`You died! Killed by ${realWord}.\nBest room: ${countRooms}`);
                        isAlive = false;
                        break;
                    } else {
                        console.log(`You slayed ${realWord}.`);
                    }
                    break;
            }
            tempWord = '';
            tempPoints = '';
            realWord = '';
        }
    }
    if (isAlive) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
