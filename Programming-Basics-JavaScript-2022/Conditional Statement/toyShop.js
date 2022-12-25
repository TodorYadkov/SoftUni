function toyShop(input) {
    let priceVacantion = Number(input[0]);
    let numPuzzle = Number(input[1]);
    let numDoll = Number(input[2]);
    let numTeddyBear = Number(input[3]);
    let numMinion = Number(input[4]);
    let numChildTruck = Number(input[5]);
    let pricePuzzle = 2.60;
    let priceDoll = 3.00;
    let priceTeddyBear = 4.10;
    let priceMinion = 8.20;
    let priceChildTruck = 2.00;
    
    let totalSum = (numPuzzle*pricePuzzle)+(numDoll*priceDoll)+
                   (numTeddyBear*priceTeddyBear)+(numMinion*priceMinion)+
                   (numChildTruck*priceChildTruck);
    let totalToy = numPuzzle+numDoll+numTeddyBear+numMinion+numChildTruck;

    if (totalToy >= 50) {
        totalSum *= 0.75;
        totalSum *= 0.90;
    } else {
        totalSum *= 0.90;
    }
    if (totalSum >= priceVacantion) {
        console.log(`Yes! ${(totalSum - priceVacantion).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceVacantion - totalSum).toFixed(2)} lv needed.`);
    }
}
toyShop(["320","8","2","5","5","1"])

