function cleverLily(input) {
    let ageLily = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceOneToy = Number(input[2]);
    let countToys = 0;
    let evenYearMoney = 10;
    let moneyCashLily = 0;
    let moneyToysLily = 0;
    let brotherLilyTheft = 0;
    let totalMoney = 0;
    
    for (let i = 1; i <= ageLily; i++) {
        if (i % 2 != 0) {
            countToys ++;
        } else {
            moneyCashLily += evenYearMoney; 
            evenYearMoney += 10;
            brotherLilyTheft ++; 
        }
    }
    moneyCashLily -= brotherLilyTheft;
    moneyToysLily = countToys * priceOneToy;
    totalMoney = moneyCashLily + moneyToysLily;
    
    if (totalMoney >= priceWashingMachine) {
        console.log(`Yes! ${(totalMoney - priceWashingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashingMachine - totalMoney).toFixed(2)}`);
    }
}
cleverLily(["21",
"1570.98",
"3"])

