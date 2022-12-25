function maxSequenceOfEqualElements(arr) {
    let result = '';
    let countEqual = 0;
    let tempEqual = 0;
    let tempResult = '';
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            if (countEqual === 0) {
                result += arr[i] + ' ' + arr[i + 1] + ' ';
            } else {
                result += arr[i] + ' ';
            }
            countEqual++;
        } else {
            if (countEqual > tempEqual) {
                tempEqual = countEqual;
                tempResult = result;
            }
            countEqual = 0;
            result = '';
        }
    }
    if (tempResult === '') {
        console.log(result);
    } else {
        console.log(tempResult)
    }
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);