function spiralMatrixs(row, col) {
  let matrix = [];
  let countRow = 0;
  let lastRow = row - 1;
  let countCol = 0;
  let lastCol = col - 1;
  let currNumber = 1;

  //create row
  for (let i = 0; i < row; i++) {
    matrix.push([]);
  }

  //condition for entires matrix
  while (countRow <= lastRow && countCol <= lastCol) {

    //create top row
    for (let i = countCol; i <= lastCol; i++) {
      matrix[countRow][i] = currNumber++;
    }
    countRow++;

    //create right column
    for (let i = countRow; i <= lastRow; i++) {
      matrix[i][lastCol] = currNumber++;
    }
    lastCol--;

    //create bottom row
    for (let i = lastCol; i >= countCol; i--) {
      matrix[lastRow][i] = currNumber++;
    }
    lastRow--;

    //create left column
    for (let i = lastRow; i >= countRow; i--) {
      matrix[i][countCol] = currNumber++;
    }
    countCol++;
  }
  matrix.forEach((row) => {
    console.log(row.join(' '))
  });

}
spiralMatrixs(5, 5);




























/*
function spiralMatrix(row, col) {
  let curRow = 0;
  let curCol = 0;
  let currentDigit = 1;
  let spiralMatrix = [];
  for (let i = 0; i < row; i++) {
    spiralMatrix.push([]);
  }
  for (let i = curRow; i < col; i++) {
    spiralMatrix[curRow][i] = currentDigit;
    currentDigit++;
  }
  curRow++;
  for (let i = curRow; i < row; i++) {
    spiralMatrix[i][col - 1] = currentDigit;
    currentDigit++;
  }
  curRow = row - 1;
  for (let i = col - 2; i >= 0; i--) {
    spiralMatrix[curRow][i] = currentDigit;
    currentDigit++;
  }
  curRow--;
  for (let i = curRow; i > 0; i--) {
    spiralMatrix[i][curCol] = currentDigit;
    currentDigit++;
  }
  curRow = 1;
  curCol = 1;
  while (curRow < row - 1 && curCol < col - 1) {
    for (let i = curRow; i < row - 1; i++) {
      for (let j = curCol; j < col - 1; j++) {
        spiralMatrix[i][j] = currentDigit++;
        curCol = j;
      }
      curRow++;
    }
  }
  console.log(spiralMatrix.join(' |'));
}
spiralMatrix(5, 5);
*/

/*

     Index: 0  1  2  3  4
            1 2 3 4 5       --> row [0]  ---> [1,2,3,4,5]
            16 17 18 19 6   --> row [1]  ---> [16,17,18,19,6]
            15 24 25 20 7   --> row [2]  ---> [15,24,25,20,7]
            14 23 22 21 8   --> row [3]  ---> [14,23,22,21,8]
            13 12 11 10 9   --> row [4]  ---> [13,12,11,10,9]
            _____________
                  |
                col

*/




































/*
function matrix(row, col) {
    let result = [];
    let counter = 1;
    let curCol = 0;
    let endCol = col - 1;
    let curRow = 0;
    let endRow = row - 1;
    for (let i = 0; i < row; i++) {
        result.push([]);
    }
    while (curCol <= endCol && curRow <= endRow) {
      //top row
        for (let i = curCol; i <= endCol; i++) {
            result[curRow][i] = counter;
            counter++;
        }
        curRow++;
        //right column
        for (let i = curRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;
        //bottom row
        for (let i = endCol; i >= curCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;
        //left column
        for (let i = endRow; i >= curRow; i--) {
            result[i][curCol] = counter;
            counter++;
        }
        curCol++;
    }
    result = result.forEach(row => console.log(row.join(' ')));
}
matrix(5, 5)
*/



/*
const matrix = (n) => {
  const results = [];for (let i = 0; i < n; i++) {
    results.push([]);
  }let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;// Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;// Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;// start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }return results;
}
*/