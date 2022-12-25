function club(input) {
    index = 0;
    let profit = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let numberCocktail = Number(input[index]);
    index++;
    let totalIncome = 0;

    while (command !== "Party!") {
        let oneOrderSum = 0;
        let priceOneCocktail = Number(command.length);
        oneOrderSum = numberCocktail * priceOneCocktail;
        if (!(oneOrderSum % 2 === 0)) {
            oneOrderSum *= 0.75;
        }
        totalIncome += oneOrderSum;
        if (totalIncome >= profit) {
            console.log("Target acquired.");
            break;
        }
        command = input[index];
        index++;
        numberCocktail = Number(input[index]);
        index++;
    }
    let diff = Math.abs(profit - totalIncome);
    if (command === "Party!") {
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${totalIncome.toFixed(2)} leva.`);
}
club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])