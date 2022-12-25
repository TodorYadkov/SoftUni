function biggestElement(input) {
    let biggestnumber = Number.MIN_SAFE_INTEGER;

    for (let arr of input) {
        for (let number of arr) {
            if (number > biggestnumber) {
                biggestnumber = number;
            }
        }
    }

    return biggestnumber;
}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
console.log(biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));