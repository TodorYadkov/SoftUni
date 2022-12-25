function heroesOfCodeAndLogic(input) {
    const command = [...input];
    const numberOfHeroes = Number(command.shift());
    const maxHP = 100;
    const maxMP = 200;
    let listOfHeroes = {};
    // get the heroes
    for (let i = 0; i < numberOfHeroes; i++) {
        let [currentHerro, healthHP, manaMP] = command.shift().split(' ');
        listOfHeroes[currentHerro] = { healtPoint: Number(healthHP), manaPoint: Number(manaMP) }
    }
    // invoke needed function
    while (command[0] !== 'End') {
        let currentCommand = command.shift().split(' - ');

        switch (currentCommand[0]) {
            case 'CastSpell':
                listOfHeroes = castSpell(currentCommand[1], currentCommand[2], currentCommand[3]);
                break;
            case 'TakeDamage':
                listOfHeroes = takeDamage(currentCommand[1], currentCommand[2], currentCommand[3]);
                break;
            case 'Recharge':
                listOfHeroes = recharge(currentCommand[1], currentCommand[2]);
                break;
            case 'Heal':
                listOfHeroes = heal(currentCommand[1], currentCommand[2]);
                break;
        }
    }

    // print the final result
    for (let hero of Object.keys(listOfHeroes)) {
        console.log(`${hero}\n  HP: ${listOfHeroes[hero].healtPoint}\n  MP: ${listOfHeroes[hero].manaPoint}`);
    }

    // functions
    function castSpell(heroName, manaPoints, spellName) {
        manaPoints = Number(manaPoints);
        if (listOfHeroes[heroName].manaPoint >= manaPoints) {
            listOfHeroes[heroName].manaPoint -= manaPoints;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${listOfHeroes[heroName].manaPoint} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }

        return listOfHeroes;
    }

    function takeDamage(heroName, damage, attacker) {
        damage = Number(damage);
        if (listOfHeroes[heroName].healtPoint - damage > 0) {
            listOfHeroes[heroName].healtPoint -= damage;
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${listOfHeroes[heroName].healtPoint} HP left!`);
        } else {
            delete listOfHeroes[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`);
        }

        return listOfHeroes;
    }

    function recharge(heroName, amount) {
        amount = Number(amount);
        let recoveredMana = 0;
        if (maxMP >= listOfHeroes[heroName].manaPoint + amount) {
            listOfHeroes[heroName].manaPoint += amount;
            recoveredMana = amount;
        } else {
            recoveredMana = maxMP - listOfHeroes[heroName].manaPoint;
            listOfHeroes[heroName].manaPoint = maxMP;
        }

        console.log(`${heroName} recharged for ${recoveredMana} MP!`);
        return listOfHeroes;
    }

    function heal(heroName, amount) {
        amount = Number(amount);
        let recoveredHealt = 0;
        if (maxHP >= listOfHeroes[heroName].healtPoint + amount) {
            listOfHeroes[heroName].healtPoint += amount;
            recoveredHealt = amount;
        } else {
            recoveredHealt = maxHP - listOfHeroes[heroName].healtPoint;
            listOfHeroes[heroName].healtPoint = maxHP;
        }

        console.log(`${heroName} healed for ${recoveredHealt} HP!`);
        return listOfHeroes;
    }
}

// heroesOfCodeAndLogic(["2",
//     "Solmyr 85 120",
//     "Kyrre 99 50",
//     "Heal - Solmyr - 10",
//     "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc",
//     "CastSpell - Kyrre - 15 - ViewEarth",
//     "End"]);

heroesOfCodeAndLogic(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"]);