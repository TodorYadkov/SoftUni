function binaryToDecimal(binary) {
    let binaryString = String(binary);
    let decimalNumber = 0;
    let countPow = 0;
    for (let i = binaryString.length - 1; i >= 0; i--) {
        let currDigit = Number(binaryString[i]);
        let currSum = Math.pow(2,countPow);
        countPow++;
        decimalNumber += currDigit * currSum;
    }
    console.log(decimalNumber);
}
binaryToDecimal(11110000);

