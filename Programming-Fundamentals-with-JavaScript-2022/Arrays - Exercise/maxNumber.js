function maxNumber(arr) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let printLine = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
            printLine = maxNum;
        }
        if (arr[i] < maxNum) {
            if (i + 1 === arr.length - 1) {
                if (arr[i] > arr[arr.length - 1]) {
                    printLine += ' ' + arr[i];
                } else {
                    printLine += ' ' + arr[i + 1];
                }
            } else if (arr[i] > arr[i + 1]) {
                printLine += ' ' + arr[i];
            } else if (arr[i] < arr[i - 1]) {
                if (arr[i] < arr[i + 1]) {
                    continue;
                } else {
                    printLine += ' ' + arr[i];
                }
            }
        }
    }
    console.log(printLine);
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);