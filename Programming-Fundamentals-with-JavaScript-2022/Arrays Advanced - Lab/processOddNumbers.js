function processOddNumbers(inputArr) {
    let result = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 !== 0) {
         result.push(inputArr[i] * 2);
        }
    }
    console.log(result.reverse().join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);