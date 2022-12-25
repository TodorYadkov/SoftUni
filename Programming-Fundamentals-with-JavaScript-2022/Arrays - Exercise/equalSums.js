function equalSums(arr) {
    let result = 'no';
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (let k = arr.length - 1; k > i; k--) {
            rightSum += arr[k];
        }
        if (leftSum === rightSum) {
            result = i;
            break;
        }
    }
    console.log(result);
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);




















