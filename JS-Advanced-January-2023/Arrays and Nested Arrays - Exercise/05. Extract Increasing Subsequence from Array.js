function extractIncreasingSubsequenceFromArray(input) {
    let resultArr = [];
    let currentBiggestNum = Number.MIN_SAFE_INTEGER;

    for (let num of input) {
        if (num >= currentBiggestNum) {
            currentBiggestNum = num;
            resultArr.push(num);
        }
    }

    return resultArr;
}

console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]));