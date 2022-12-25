function firstAndLastKNumbers(inputArray) {
    let k = inputArray.shift();
    let firstK = inputArray.slice(0,k);
    let lastK = inputArray.slice(-k);

    console.log(`${firstK.join(' ')}\n${lastK.join(' ')}`);
}
firstAndLastKNumbers([2,7, 8, 9]);
firstAndLastKNumbers([3,6, 7, 8, 9]);