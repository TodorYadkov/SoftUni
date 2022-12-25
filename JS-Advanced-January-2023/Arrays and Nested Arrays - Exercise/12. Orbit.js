function orbit(array) {
    let matrix = [];
    for (let i = 0; i < array[0]; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < array[0]; row++) {
        for (let col = 0; col < array[1]; col++) {
            matrix[row][col] = Math.max(Math.abs(row - array[2]), Math.abs(col - array[3])) + 1;
        }
    }
    matrix.forEach( (row) => {
        console.log(row.join(' '));
    });
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);