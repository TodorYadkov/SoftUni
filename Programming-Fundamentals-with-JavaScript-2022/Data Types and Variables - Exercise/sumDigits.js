function sumDigits(number) {
    let numToString = String(number);
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
    }
    console.log(sum);
}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)