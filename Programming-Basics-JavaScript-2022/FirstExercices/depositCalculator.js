function deposit(input) {
    let depositSum = Number(input[0]);
    let termDeposit = Number(input[1]);
    let interestRate = Number(input[2]);
    let interestRatePercent = interestRate / 100;
    let sumOfInterestAll = depositSum * interestRatePercent;
    let interestOfOneMonths = sumOfInterestAll / 12;
    let total = depositSum + (termDeposit * interestOfOneMonths);
    console.log(total);
}
deposit([2350,6,7])