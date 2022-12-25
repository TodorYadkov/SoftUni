function manOWar(input) {
    const command = [...input];
    let pirateShipStatus = command.shift().split('>').map(Number);
    let warshipStatus = command.shift().split('>').map(Number);
    const maxHealth = Number(command.shift());
    let isBegin = true;

    while (command[0] !== 'Retire' && isBegin) {
        let currentCommand = command.shift().split(' ');

        switch (currentCommand[0]) {
            case 'Fire':
                warshipStatus = fire(warshipStatus, currentCommand[1], currentCommand[2]);
                break;
            case 'Defend':
                pirateShipStatus = defend(pirateShipStatus, currentCommand[1], currentCommand[2], currentCommand[3]);
                break;
            case 'Repair':
                pirateShipStatus = repair(pirateShipStatus, currentCommand[1], currentCommand[2]);
                break;
            case 'Status':
                pirateShipStatus = statusPirateShip(pirateShipStatus);
                break;
        }
    }

    if (isBegin) {
        let pirateShipSum = pirateShipStatus.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        let warshipSum = warshipStatus.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warshipSum}`);
    }

    function fire(warship, index, damage) {
        index = Number(index);
        damage = Number(damage);
        if (index >= 0 && index < warship.length) {
            warship[index] -= damage;
            if (warship[index] <= 0) {
                isBegin = false;
                console.log(`You won! The enemy ship has sunken.`);
            }
        }

        return warship;
    }

    function defend(pirateShip, startIndex, endIndex, damage) {
        startIndex = Math.min(Number(startIndex), Number(endIndex));
        endIndex = Math.max(Number(startIndex), Number(endIndex));
        damage = Number(damage);
        if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;
                if (pirateShip[i] <= 0) {
                    isBegin = false;
                    console.log(`You lost! The pirate ship has sunken.`);
                    break;
                }
            }
        }

        return pirateShip;
    }

    function repair(pirateShip, index, health) {
        index = Number(index);
        health = Number(health);
        if (index >= 0 && index < pirateShip.length) {
            if (pirateShip[index] + health > maxHealth) {
                pirateShip[index] = maxHealth;
            } else {
                pirateShip[index] += health;
            }
        }

        return pirateShip;
    }

    function statusPirateShip(pirateShip) {
        let minHealth = maxHealth * 0.20;
        let countRepair = 0;
        for (let section of pirateShip) {
            if (section < minHealth) {
                countRepair++;
            }
        }

        console.log(`${countRepair} sections need repair.`);
        return pirateShip;
    }
}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);

manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);