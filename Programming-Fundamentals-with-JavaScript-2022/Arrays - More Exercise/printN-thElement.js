function printNthElement(arr) {
    let step = Number(arr[arr.length - 1]);
    let printLine = [];
    for (let i = 0; i < arr.length - 1; i += step) {
        printLine.push(arr[i]);
    }
    console.log(printLine.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);