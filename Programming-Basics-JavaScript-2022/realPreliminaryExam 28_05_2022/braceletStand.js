function braceletStand(input) {
    let cashMoney = Number(input[0]);
    let profitPerDay = Number(input[1]);
    let costsAll = Number(input[2]);
    let priceSurprise = Number(input[3]);
    let totalProfitAllDay = profitPerDay * 5;
    let totalCashMoney = cashMoney * 5;
    let availableMoney = totalProfitAllDay + totalCashMoney - costsAll;

    if (availableMoney >= priceSurprise) {
        console.log(`Profit: ${availableMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(priceSurprise - availableMoney).toFixed(2)} BGN.`);
    }
}
braceletStand(["2.10","17.50","20.20","148.50"])