function processOddPositions(input) {
    let resultArr = input.filter((_,index) => index % 2 !== 0).map(x => x * 2).reverse();
    return resultArr;
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));