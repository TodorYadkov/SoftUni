function diagonalSums(input) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let i = 0; i < input.length; i++) {
        leftDiagonalSum += input[i][i];
        rightDiagonalSum += input[i][(input.length - 1) - i];
    }

    console.log(leftDiagonalSum, rightDiagonalSum);
}
diagonalSums([[20, 40], 
               [10, 60]]);

diagonalSums([[3, 5, 17],
              [-1, 7, 14],
              [1, -8, 89]]);

diagonalSums([[3, 5, 17, 3, 5, 17, 3, 5, 17],
              [3, 5, 17, 3, 5, 17, 3, 5, 17],
              [3, 5, 17, 3, 5, 17, 3, 5, 17],
              [3, 5, 17, 3, 5, 17, 3, 5, 17],
              [3, 5, 17, 3, 5, 17, 3, 5, 17],
              [3, 5, 17, 3, 5, 17, 3, 5, 17],
              [3, 5, 17, 3, 5, 17, 3, 5, 17],
              [3, 5, 17, 3, 5, 17, 3, 5, 17],
              [3, 5, 17, 3, 5, 17, 3, 5, 17]]);       