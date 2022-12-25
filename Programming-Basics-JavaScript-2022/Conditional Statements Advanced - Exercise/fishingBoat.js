function fishingBoat(input) {
    let budget = Number(input[0]);
    let seasons = input[1];
    let numFisher = input[2];
    let costBoat = 0;
    
    switch (seasons) {
        case "Spring":
            costBoat = 3000;
        break;
        case "Summer":
        case "Autumn":
            costBoat = 4200;
        break;
        case "Winter":
            costBoat = 2600;
        break;
    }
    
    if (numFisher <= 6) {
        costBoat *= 0.90;
    } else if (numFisher > 6 && numFisher <= 11) {
        costBoat *= 0.85;
    } else if ( numFisher >11) {
        costBoat *= 0.75;
    }

    if (numFisher % 2 == 0) {
        if (seasons == "Spring" || seasons == "Summer" || seasons == "Winter") {
            costBoat *= 0.95;
        }
    }

    if (budget >= costBoat) {
        console.log(`Yes! You have ${(budget - costBoat).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(costBoat - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3600","Autumn","6"])

