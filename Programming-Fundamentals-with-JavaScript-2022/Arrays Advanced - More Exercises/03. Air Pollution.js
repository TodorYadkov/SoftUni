function airPolution(arr, forcesAffecting) {
    forcesAffecting = forcesAffecting.map(x => x.split(' '));
    let matrixSofia = arr.map(str => str.split(' ').map(y => Number(y)));
    let result = [];
    let isPoluted = false;

    while (forcesAffecting.length != 0) {
        let command = forcesAffecting.shift();
        let index;
        switch (command[0]) {
            case 'breeze':
                index = Number(command[1]);
                for (let i = 0; i < matrixSofia[index].length; i++) {
                    let currentElement = matrixSofia[index][i];
                    if (currentElement - 15 >= 0) {
                        currentElement -= 15;
                    } else {
                        currentElement = 0;
                    }
                    matrixSofia[index].splice(i, 1, currentElement);
                }
                break;
            case 'gale':
                index = Number(command[1]);
                for (let i = 0; i < matrixSofia[0].length; i++) {
                    let currentElement = matrixSofia[i][index];
                    if (currentElement - 20 >= 0) {
                        currentElement -= 20;
                    } else {
                        currentElement = 0;
                    }
                    matrixSofia[i].splice(index, 1, currentElement);
                }
                break;
            case 'smog':
                let value = Number(command[1]);
                for (let i = 0; i < matrixSofia.length; i++) {
                    for (let j = 0; j < matrixSofia[i].length; j++) {
                        let currentElement = matrixSofia[i][j] + value;
                        matrixSofia[i].splice(j,1,currentElement);
                    }
                }
                break;
        }
    }
    for (let i = 0; i < matrixSofia.length; i++) {
        for (let j = 0; j < matrixSofia[i].length; j++) {
            let currentElement = matrixSofia[i][j];
            if (currentElement >= 50) {
                isPoluted = true;
                result.push(`[${i}-${j}]`);
            }
        }
    }
    if (isPoluted) {
        console.log(`Polluted areas: ${result.join(', ')}`);
    } else {
        console.log("No polluted areas");
    }
}
airPolution(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);

airPolution(['5 7 3 28 32',
'41 12 49 30 33',
'3 16 20 42 12',
'2 20 10 39 14',
'7 34 4 27 24'],
['smog 11', 'gale 3', 'breeze 1', 'smog 2']);

airPolution(['5 7 2 14 4',
'21 14 2 5 3',
'3 16 7 42 12',
'2 20 8 39 14',
'7 34 1 10 24'],
['breeze 1', 'gale 2', 'smog 35']);