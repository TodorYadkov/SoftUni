function sumFirstAndLast(array) {
    let firstNum =Number(array.shift());
    let lastElemen = Number(array.pop());
    console.log(firstNum + lastElemen);
}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);