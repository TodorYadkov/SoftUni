function theBiscuitFactory(input) {
    let biscuitPerDay = Number(input[0]);
    let countWorkers = Number(input[1]);
    let otherFactoryBiscuits = Number(input[2]);
    let productionPerDay = biscuitPerDay * countWorkers;
    let totalProductionMont = 0;
    let differencePercent = 0;

    for (let days = 1; days <= 30; days++) {
        if (days % 3 === 0) {
            totalProductionMont += Math.floor(productionPerDay * 0.75);
        } else {
            totalProductionMont += Math.floor(productionPerDay);
        }
    }

    console.log(`You have produced ${totalProductionMont} biscuits for the past month.`);

    if (totalProductionMont > otherFactoryBiscuits) {
        differencePercent = (((totalProductionMont - otherFactoryBiscuits) / otherFactoryBiscuits) * 100).toFixed(2);
        console.log(`You produce ${differencePercent} percent more biscuits.`);
    } else {
        differencePercent = (((otherFactoryBiscuits - totalProductionMont) / otherFactoryBiscuits) * 100).toFixed(2);
        console.log(`You produce ${differencePercent} percent less biscuits.`);
    }
}

// theBiscuitFactory(['78','8','16000']);
theBiscuitFactory(['65','12','26000']);
// theBiscuitFactory(['163','16','67020']);