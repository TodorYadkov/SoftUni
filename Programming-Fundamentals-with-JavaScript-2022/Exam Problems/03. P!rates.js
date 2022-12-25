function pirates(input) {
    const workArr = input.slice();
    let targetCities = {};

    while (workArr[0] !== 'Sail') {
        let [currentCity, population, gold] = workArr.shift().split('||');
        if (targetCities.hasOwnProperty(currentCity)) {
            targetCities[currentCity].population += Number(population);
            targetCities[currentCity].gold += Number(gold);
        } else {
            targetCities[currentCity] = { population: Number(population), gold: Number(gold) };
        }
    }
    workArr.shift();

    while (workArr[0] !== 'End') {
        let currentCommand = workArr.shift().split('=>');
        let city = '';
        let people = 0;
        let gold = 0;
        
        switch (currentCommand[0]) {
            case 'Plunder':
                city = currentCommand[1];
                people = Number(currentCommand[2]);
                gold = Number(currentCommand[3]);

                targetCities[city].population -= people;
                targetCities[city].gold -= gold;
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if (targetCities[city].population <= 0 || targetCities[city].gold <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    delete targetCities[city];
                }
                break;
            case 'Prosper':
                city = currentCommand[1];
                gold = Number(currentCommand[2]);

                if (gold < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    targetCities[city].gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${targetCities[city].gold} gold.`);
                }
                break;
        }
    }

    const lengthTargetCities = Object.keys(targetCities).length;
    if (lengthTargetCities === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else if (lengthTargetCities > 0) {
        console.log(`Ahoy, Captain! There are ${lengthTargetCities} wealthy settlements to go to:`)
        for (let prop in targetCities) {
            console.log(`${prop} -> Population: ${targetCities[prop].population} citizens, Gold: ${targetCities[prop].gold} kg`);
        }
    }
}

// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"]);

// pirates(["Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End"]);

pirates(["Nassau||95000||1000",
    "Campeche||270000||690",
    "Sail",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);