function shopping(input) {
    let budgetPeter = Number(input[0]);
    let numVideoCard = Number(input[1]);
    let numProcessor = Number(input[2]);
    let numRam = Number(input[3]);
    let priceVideoCard = 250;
    let priceProcessor = (numVideoCard * priceVideoCard) * 0.35;
    let priceRam = (numVideoCard * priceVideoCard) * 0.1;
    let sumTotal = (numVideoCard * priceVideoCard) + 
                   (numProcessor * priceProcessor) +
                   (numRam * priceRam);
    if (numVideoCard > numProcessor) {
        sumTotal -= (sumTotal * 0.15);
    }
    if (sumTotal <= budgetPeter) {
        console.log(`You have ${(budgetPeter-sumTotal).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money!  You need ${(sumTotal - budgetPeter).toFixed(2)} leva more!`);
    }
}
shopping(["920.45",
"3",
"1",
"1"])

