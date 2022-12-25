function distinctArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let currentNumber = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (currentNumber === array[j]) {
                array.splice(j,1);
                j--;
            }
        }
    }
    console.log(array.join(' '));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 2, 2, 2, 2, 2, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);