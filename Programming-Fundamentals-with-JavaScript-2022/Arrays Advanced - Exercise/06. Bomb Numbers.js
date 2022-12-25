function bombNumbers(array, bombNumbers) {
    let bombNum = bombNumbers[0];
    let bombPower = bombNumbers[1];
    while (array.includes(bombNum)) {
            let indexRemoveStart = Math.max(0,array.indexOf(bombNum) - bombPower);
            let elementToBomb = bombPower * 2 + 1;
            array.splice(indexRemoveStart, elementToBomb);
    }
    let sum = 0;
    for (let el of array) {
        sum += el;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);