function equalSumsEvenOddPosition(input) {
    let numOne = input[0];
    let numTwo = Number(input[1]);
    let printNumbers = "";

    while (numOne <= numTwo) {
        let sumEven = 0;
        let sumOdd = 0;
        for (let i = 0; i < numOne.length; i++) {
            let currentNumber = Number(numOne[i]);
            if (i % 2 === 0) {
                sumEven += currentNumber;
            } else {
                sumOdd += currentNumber;
            }
        }
        if (sumEven === sumOdd) {
        printNumbers += numOne + " ";
        }
        numOne ++;
        numOne = String(numOne);
    }
    console.log(printNumbers);
}
equalSumsEvenOddPosition(["100000","100050"])