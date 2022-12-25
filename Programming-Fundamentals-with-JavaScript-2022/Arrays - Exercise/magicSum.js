function magicSum(arr, n) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === n) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }

}
magicSum([1, 7, 6, 2, 19, 23], 8);
console.log(`<====>Next Exercises<====>`);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log(`<====>Next Exercises<====>`);
magicSum([1, 2, 3, 4, 5, 6], 6);