function market(input) {
    let priceVegetable = Number(input[0]);
    let priceFruit = Number(input[1]);
    let quantityVegetable = Number(input[2]);
    let quantityFruit = Number(input[3]);
    let eurRate = 1.94;

    let sumLv = (priceVegetable*quantityVegetable)+(priceFruit*quantityFruit);
    let sumEur = sumLv/eurRate;

    console.log(sumEur.toFixed(2));
}
market([0.194,19.4,10,10])