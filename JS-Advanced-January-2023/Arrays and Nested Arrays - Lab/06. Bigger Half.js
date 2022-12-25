function biggerHalf(input) {
    input.sort((a,b) => a - b);
    let halfArr = input.slice(Math.floor(input.length / 2));
    return halfArr;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));