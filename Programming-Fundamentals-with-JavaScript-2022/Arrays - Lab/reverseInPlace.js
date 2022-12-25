function reverse(arrays) {
    let printLine= '';
    for (let i = arrays.length - 1; i >= 0; i--) {
        printLine += arrays[i] + ' ';
    }
    console.log(printLine);
}
reverse(['abc', 'def', 'hig', 'klm', 'nop'])