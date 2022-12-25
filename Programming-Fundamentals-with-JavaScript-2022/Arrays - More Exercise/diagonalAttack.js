function diagonalAttack(arrayInput) {
  let matrix = [];
  for (let i = 0; i < arrayInput.length; i++) {
    matrix.push(arrayInput[i].split(' '));
  }

  let startCol = 0;
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;
  let endCol = matrix[0].join(' ').split(' ').length - 1;
  let endRow = matrix.length - 1;

  //calculate left diagonal sum
  for (let i = 0; i <= endRow; i++) {
    leftDiagonalSum += Number(matrix[i][startCol++]);
  }
  startCol--;

  //calculate right diagonal sum
  for (let i = 0; i <= endRow; i++) {
    rightDiagonalSum += Number(matrix[i][startCol--]);
  }
  //if left and right sum are equal set every element that is NOT part of the main diagonals to that sum
  if (leftDiagonalSum === rightDiagonalSum) {
    for (let i = 0; i <= endRow; i++) {
      for (let m = 0; m <= endCol; m++) {
        if (i === m || Math.abs(endCol - i) === m) {
          continue;
        } else {
          matrix[i][m] = leftDiagonalSum;
        }
      }
    }
    matrix.forEach((row) => {
      console.log(row.join(' '));
    });
  } else {
   matrix.forEach((row) => {
      console.log(row.join(' '));
    });
  }
}
diagonalAttack(['5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1']
);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);