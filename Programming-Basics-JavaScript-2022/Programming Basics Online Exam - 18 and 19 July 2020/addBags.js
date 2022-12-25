function addBags(input) {
    let priceBaggage = Number(input[0]);
    let kgBaggage = Number(input[1]);
    let dayBefore = Number(input[2]);
    let numberOfSuitcase = Number(input[3]);
    let price = 0;

    if (kgBaggage < 10) {
        price = priceBaggage * 0.20;
    } else if (kgBaggage >= 10 && kgBaggage <= 20) {
        price = priceBaggage * 0.50;
    } else if (kgBaggage > 20) {
        price = priceBaggage;
    }
    if (dayBefore > 30) {
        price *= 1.10;
    } else if (dayBefore >= 7 && dayBefore <= 30) {
        price *= 1.15;
    } else if ( dayBefore < 7 ) {
        price *= 1.40;
    }
    price *= numberOfSuitcase;
    console.log(`The total price of bags is: ${price.toFixed(2)} lv.`);
}
addBags(["25.50",
"5",
"36",
"6"])