function bitcoinMining(input) {
    let index = 0;
    let gramsGold = Number(input[index++]);
    let availableMoney = 0;
    let priceBitcoin = 11949.16;
    let priceGoldForOneGram = 67.51;
    let countBoughtBitcoin = 0;
    let countDays = 0;
    let stolenGold = 0.70;
    let firstDayBoughtBitcoin = 0;
    let isBuyBitcoin = false;
    while (!isNaN(gramsGold)) {
        countDays++;
        if (countDays % 3 === 0) {
            gramsGold *= stolenGold;
        }
        availableMoney += gramsGold * priceGoldForOneGram;
        while (availableMoney >= priceBitcoin) {
            countBoughtBitcoin++;
            availableMoney -= priceBitcoin;
            if (firstDayBoughtBitcoin === 0) {
                firstDayBoughtBitcoin = countDays;
                isBuyBitcoin = true;
            }
        }
        gramsGold = Number(input[index++]);
    }
    console.log(`Bought bitcoins: ${countBoughtBitcoin}`);
    if (isBuyBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBoughtBitcoin}`);
    }
    console.log(`Left money: ${availableMoney.toFixed(2)} lv.`);
}
bitcoinMining([50, 100])