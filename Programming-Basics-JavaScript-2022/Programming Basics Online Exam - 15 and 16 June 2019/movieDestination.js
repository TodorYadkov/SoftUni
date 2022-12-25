function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let day = Number(input[3]);
    let price = 0;
    let totalCost = 0;
    switch (destination) {
        case "Dubai":
            if (season === "Summer") {
                price = 40000;
            } else if (season === "Winter") {
                price = 45000;
            }
            break;
        case "Sofia":
            if (season === "Summer") {
                price = 12500;
            } else if (season === "Winter") {
                price = 17000;
            }
            break;
        case "London":
            if (season === "Summer") {
                price = 20250;
            } else if (season === "Winter") {
                price = 24000;
            }
            break;
    }
    totalCost = day * price;
    if (destination === "Dubai") {
        totalCost *= 0.70;
    } else if (destination === "Sofia") {
        totalCost *= 1.25;
    }
    let diff = Math.abs(budget - totalCost);
    if (budget >= totalCost) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }
}
movieDestination(["200000",
"London",
"Summer",
"7"])