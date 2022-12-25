function carWash(arrCommand) {

    let finalValue = 0;

    while (arrCommand.length > 0) {
        let tempCommand = arrCommand.shift();

        switch (tempCommand) {
            case 'soap': finalValue = soap(finalValue); break;
            case 'water': finalValue = water(finalValue); break;
            case 'vacuum cleaner': finalValue = vacuumCleaner(finalValue); break;
            case 'mud': finalValue = mud(finalValue); break;
        }
    }

    console.log(`The car is ${finalValue.toFixed(2)}% clean.`);

    function soap(value) {
        return value += 10;
    }

    function water(value) {
        return value *= 1.2;
    }

    function vacuumCleaner(value) {
        return value *= 1.25;
    }

    function mud(value) {
        return value *= 0.90;
    }
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);