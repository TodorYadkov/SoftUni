function familyTrip(input) {
    let budget = Number(input[0]);
    let overnight = Number(input[1]);
    let priceNight = Number(input[2]);
    let percentAdditionalCost = Number(input[3]);
    let toPercent = percentAdditionalCost / 100;
    let additionalCostSum = budget * toPercent;
    let costNight = overnight * priceNight;
    let totalCost = costNight + additionalCostSum; 

    if (overnight > 7) {
        priceNight *= 0.95;
        costNight = overnight * priceNight;
        totalCost = costNight + additionalCostSum;
    }
    let diff = Math.abs(budget - totalCost);
    if (totalCost <= budget) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}
familyTrip(["800.50","8","100","2"])