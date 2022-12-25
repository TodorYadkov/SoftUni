function sortingNumbers(input) {
    input.sort((a, b) => b - a);

    for (let i = 0; i < input.length; i += 2) {
        let tempNum = input.pop();
        input.splice(i, 0, tempNum);
    }

    return input;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));