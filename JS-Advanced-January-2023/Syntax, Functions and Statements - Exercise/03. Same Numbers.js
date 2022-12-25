function sameNumbers(number) {
    number = Math.abs(number);
    let isSame = true;
    let strFromNumber = number.toString();

    for (let i = 0; i < strFromNumber.length - 1; i++) {
        if (!(strFromNumber[i] === strFromNumber[i + 1])) {
            isSame = false;
            break;
        }
    }

    let totalSumOfDigit = strFromNumber.split('').reduce((acc, currentNumber) => acc + Number(currentNumber), 0);
    console.log(isSame + '\n' + totalSumOfDigit);
}
sameNumbers(2222222);
sameNumbers(1234);
sameNumbers(-222)