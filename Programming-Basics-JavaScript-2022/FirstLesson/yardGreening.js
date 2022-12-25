function yardGreening(input) {
    let priceGreeningOnSquareMeter = 7.61;
    let priceDiscount = 0.18;
    let squareMeter = Number(input[0]);
    let sumWithoutDiscount = squareMeter * priceGreeningOnSquareMeter;
    let sumDiscount = sumWithoutDiscount * priceDiscount;
    let sumFinal = sumWithoutDiscount - sumDiscount;
    console.log(`The final price is: ${sumFinal} lv.`);
    console.log(`The discount is: ${sumDiscount} lv.`);
}
yardGreening([150])