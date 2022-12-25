function muOnline(inputStr) {
    const workArr = inputStr.split('|');
    let maxHealth = 100;
    let health = maxHealth;
    let bitcoins = 0;
    let countRooms = 0;
    let isWin = true;

    while (workArr.length > 0 && isWin) {
        let [currentCommand, value] = workArr.shift().split(' ');
        value = Number(value);
        countRooms++;

        switch (currentCommand) {
            case 'potion':
                let isGreaterThanMaxHealth = health + value < maxHealth;
                let amountHealth = 0;
                if (isGreaterThanMaxHealth) {
                    health += value;
                    amountHealth = value;
                } else {
                    amountHealth = maxHealth - health
                    health = maxHealth;
                }
                console.log(`You healed for ${amountHealth} hp.\nCurrent health: ${health} hp.`);
                break;
            case 'chest':
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                if (health - value <= 0) {
                    health -= value;
                    isWin = false;
                    console.log(`You died! Killed by ${currentCommand}.\nBest room: ${countRooms}`);
                    break;
                } else {
                    health -= value;
                    console.log(`You slayed ${currentCommand}.`);
                }
                break;
        }
    }

    if (isWin) {
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    }
}

// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");