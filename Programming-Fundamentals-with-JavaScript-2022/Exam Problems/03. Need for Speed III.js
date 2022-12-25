function needForSpeed(input) {
    let listOwnCarObj = {};
    const maxFuelTank = 75;
    let command = [...input];
    let numberOfCars = Number(command.shift());
    command.splice(0, numberOfCars)
        .forEach(car => {
            let tokens = car.split('|');
            listOwnCarObj[tokens[0]] = { mileage: Number(tokens[1]), fuel: Number(tokens[2]) };
        });

    while (command[0] !== 'Stop') {
        let currCommand = command.shift().split(' : ');

        switch (currCommand[0]) {
            case 'Drive':
                listOwnCarObj = drive(currCommand[1], currCommand[2], currCommand[3]);
                break;
            case 'Refuel':
                listOwnCarObj = refuel(currCommand[1], currCommand[2]);
                break;
            case 'Revert':
                listOwnCarObj = revert(currCommand[1], currCommand[2]);
                break;
        }
    }

    function drive(car, distance, fuel) {
        distance = Number(distance);
        fuel = Number(fuel);
        if (listOwnCarObj[car].fuel < fuel) {
            console.log('Not enough fuel to make that ride');
        } else {
            listOwnCarObj[car].mileage += distance;
            listOwnCarObj[car].fuel -= fuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

            if (listOwnCarObj[car].mileage >= 100000) {
                delete listOwnCarObj[car];
                console.log(`Time to sell the ${car}!`);
            }
        }
        return listOwnCarObj;
    }

    function refuel(car, fuel) {
        fuel = Number(fuel);
        let littersToFull = maxFuelTank - listOwnCarObj[car].fuel;
        if (fuel > littersToFull) {
            listOwnCarObj[car].fuel = maxFuelTank;
        } else {
            listOwnCarObj[car].fuel += fuel;
            littersToFull = fuel;
        }
        console.log(`${car} refueled with ${littersToFull} liters`);
        return listOwnCarObj;
    }

    function revert(car, km) {
        km = Number(km);
        if (listOwnCarObj[car].mileage - km < 10000) {
            listOwnCarObj[car].mileage = 10000
        } else {
            listOwnCarObj[car].mileage -= km;
            console.log(`${car} mileage decreased by ${km} kilometers`);
        }
        return listOwnCarObj;
    }

    for (let car in listOwnCarObj) {
        console.log(`${car} -> Mileage: ${listOwnCarObj[car].mileage} kms, Fuel in the tank: ${listOwnCarObj[car].fuel} lt.`);
    }
}

// needForSpeed([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop']);

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop']);