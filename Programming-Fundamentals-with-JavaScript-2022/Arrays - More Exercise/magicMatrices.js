function magicMatrices(arr) {
    let sumRow1 = 0;
    let sumRow2 = 0;
    let sumCol1 = 0;
    let sumCol2 = 0;
    let printline = 'true';
    for (let i = 0; i < arr.length - 1; i++) {
        sumRow1 = arr[i].reduce((a,b) => a + b);
        sumRow2 = arr[i + 1].reduce((x,y) => x + y);
        for (let j = 0; j < arr.length; j++) {
            sumCol1 += arr[i][j];
            sumCol2 += arr[i + 1][j];
        }
        if (sumRow1 !== sumRow2 
            || sumCol1 !== sumCol2) {
                printline = 'false';
            }
    }
    console.log(printline);
}
magicMatrices([[4, 5, 6], 
               [6, 5, 4], 
               [5, 5, 5]]);

magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);


























// function magicMatrice(matrix) {
// for (let i = 0; i < matrix.length - 1; i++) {
//     let sumROne = matrix[i].reduce((a, b) => a + b, 0);
//     let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
//     let sumCOne = 0;
//     let sumCTwo = 0;

//     for (let j = 0; j < matrix.length; j++) {
//         sumCOne += matrix[i][j];
//         sumCTwo += matrix[i + 1][j];
//     }

//     if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
//         return false;
//     }
// }

// return true;
// }
// magicMatrice([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// magicMatrice([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
// magicMatrice([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);