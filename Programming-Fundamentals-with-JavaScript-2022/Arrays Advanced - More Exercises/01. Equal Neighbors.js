function equalNeighbors(input) {
    let countEqual = 0;
    for (let i = 0; i < input.length - 1; i++) {
        let currentArray = input[i];
        let nextArray = input[i + 1];
        if (input.length - 1 === i + 1) {
            for (let j = 0; j < nextArray.length - 1; j++) {
                if (nextArray[j] === nextArray[j + 1]) {
                    countEqual++;
                }
            }
            for (let j = 0; j < currentArray.length - 1; j++) {
                if (currentArray[j] === currentArray[j + 1]) {
                    countEqual++;
                }
            }
        } else {
            for (let j = 0; j < currentArray.length - 1; j++) {
                if (currentArray[j] === currentArray[j + 1]) {
                    countEqual++;
                }
            }
        }
        for (let j = 0; j < currentArray.length; j++) {
            if (currentArray[j] === nextArray[j]) {
                countEqual++;
            }
        }
    }
    console.log(countEqual);
}
equalNeighbors([[2,2,5,7,4],
                [4,0,5,3,4],
                [2,5,5,4,2]]);