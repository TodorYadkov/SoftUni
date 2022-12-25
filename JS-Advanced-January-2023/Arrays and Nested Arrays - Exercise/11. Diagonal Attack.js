function diagonalAttack(input) {
    const matrix = input.map(el => el.split(' ').map(Number));

    let tempIndex = 0;
    let rightDiagonal = matrix.map((_, index, arr) => arr[index][tempIndex++]).reduce((acc, value) => acc + value, 0);
    let leftDiagonal = matrix.map((_, index, arr) => arr[index][--tempIndex]).reduce((acc, value) => acc + value, 0);

    if (rightDiagonal === leftDiagonal) {
        let endCol = matrix[0].length - 1;
        let endRow = matrix.length - 1;
        for (let i = 0; i <= endRow; i++) {
            for (let m = 0; m <= endCol; m++) {
                if (i === m || Math.abs(endCol - i) === m) {
                    continue;
                } else {
                    matrix[i][m] = rightDiagonal;
                }
            }
        }
    }
    
    matrix.forEach(el => console.log(el.join(' ')));
}

diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);