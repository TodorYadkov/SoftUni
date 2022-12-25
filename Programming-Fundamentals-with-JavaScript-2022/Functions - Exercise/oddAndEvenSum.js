function oddAndEvenSum(number) {
    let numberToString = String(number);
    console.log(`Odd sum = ${oddSum(numberToString)}, Even sum = ${evenSum(numberToString)}`);

    function oddSum(data) {
        let sumOdd = 0;
        for (let i = 0; i < data.length; i++) {
            if (Number(data[i]) % 2 !== 0) {
                sumOdd += Number(data[i]);
            }
        }
        return sumOdd;
    }
    
    function evenSum(data) {
        let sumEven = 0;
        for (let i = 0; i < data.length; i++) {
            if (Number(data[i]) % 2 === 0) {
                sumEven += Number(data[i]);
            }
        }
        return sumEven;
    }
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);