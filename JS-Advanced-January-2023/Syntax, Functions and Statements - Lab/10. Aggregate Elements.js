function aggregateElements(input) {
    let firstResultSum = input.reduce((acc, value) => acc + value, 0);
    let secondResultSum = input.reduce((acc, value) => acc + (1 / value), 0);

    console.log(`${firstResultSum}\n${secondResultSum}\n${input.join('')}`);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);