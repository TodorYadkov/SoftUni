function sumEvenNumbers(input) {
    let sumEven = 0;
    for (let num of input) {
        num = Number(num);
        if (num % 2 === 0) {
            sumEven += num;
        }
    }
    console.log(sumEven);
}
sumEvenNumbers(['1','2','3','4','5','6'])
sumEvenNumbers(['3','5','7','9'])
sumEvenNumbers(['2','4','6','8','10'])