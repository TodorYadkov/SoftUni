function rotation(arr, rotNum) {
    for (let i = 1; i <= rotNum; i++) {
        let firstNumber = arr[0];
        for (let k = 0; k < arr.length - 1; k++) {
            arr[k] = arr[k + 1];
        }
        arr[arr.length - 1] = firstNumber;
    } 
    console.log(arr.join(' '));
}
rotation([51, 47, 32, 61, 21], 2);
rotation([32, 21, 61, 1], 4);
rotation([2, 4, 15, 31], 10);