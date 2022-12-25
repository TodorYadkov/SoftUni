function lastKNumbersSequence(n, k) {
    let resultArr = [1];

    for (let i = 2; i <= n; i++) {
        let tempArr = resultArr.slice(-k);
        let tempSum = tempArr.reduce((acc, sum) => acc + sum, 0);
        resultArr.push(tempSum++)
    }
    return resultArr;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));