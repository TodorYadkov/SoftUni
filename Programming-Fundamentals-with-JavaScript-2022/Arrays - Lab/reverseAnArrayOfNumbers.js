function reverseAnArrayOfNumbers(n,arrays) {
    let printLine = '';
    for (let i = n - 1; i >= 0; i--) {
        let currNum = arrays[i];
        printLine += currNum + ' ';
    }
    console.log(printLine);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])