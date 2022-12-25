function equalNeighbors(input) {
    let countEqual = 0;

    for (let rowIndex = 0; rowIndex < input.length; rowIndex++) {

        for (let colIndex = 0; colIndex < input[rowIndex].length; colIndex++) {

            if ((colIndex + 1 < input[rowIndex].length) && (input[rowIndex][colIndex] === input[rowIndex][colIndex + 1])) {
                countEqual++;
            }

            if ((rowIndex + 1 < input.length) && (input[rowIndex][colIndex] === input[rowIndex + 1][colIndex])) {
                countEqual++;
            }
        }
    }

    return countEqual;
}
console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
                             ['well', 'done', 'yo', '6'],
                             ['not', 'done', 'yet', '5']]));

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
                 ['4', '0', '5', '3', '4'],
                 ['2', '3', '5', '4', '2'],
                 ['9', '8', '7', '5', '4']]));

console.log(equalNeighbors([['2', '2', '5', '7', '4'],
                            ['4', '0', '5', '3', '4'],
                            ['2', '5', '5', '4', '2']]));

