function encoded(arr) {
    // Create alphabet matrix
    let alphabetMatrix = [];
    alphabetMatrix.push(String.fromCharCode(32));
    for (let i = 65; i <= 90; i++) {
        alphabetMatrix.push(String.fromCharCode(i));
    }

    // Get size of template matrix
    let sizeTemplate = Number(arr.shift());

    // Intialize the template matrix
    let templateMatrix =[];
    for (let i = 0; i < sizeTemplate; i++) {
        templateMatrix.push(arr.shift().split(' ').map(Number));
    }
    
    // Intialize the encrypted code
    let matrix = [];
    for (let el of arr) {
        matrix.push(el.split(' ').map(Number));
    }

    // Read the encrypted code
    let result= '';

    for(let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let currenNumber = matrix[row][col];
            let currentTemplateNumber = templateMatrix[row % templateMatrix.length][col % templateMatrix[0].length];
            let tempSum = currenNumber + currentTemplateNumber;
            while (tempSum - 27 >= 0) {
                tempSum -=27;
            }
            result += alphabetMatrix[tempSum];
        }
    }
    console.log(result);
}

encoded(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14']);
// MY NAME IS OZYMANDIAS KING OF KINGS LOOK ON MY WORKS YE MIGHTY AND DESPAIR