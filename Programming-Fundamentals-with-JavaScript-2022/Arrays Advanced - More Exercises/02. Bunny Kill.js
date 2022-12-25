function bunnyKill(inputArray) {
    let cordinates = inputArray.pop().split(' ').map(str => str.split(',').map(x => Number(x)));
    let multidimensionalArray = [];
    let totalSnowballDamage = 0;
    let countSnowball = 0;

    for (let i = 0; i < inputArray.length; i++) {
        multidimensionalArray.push(inputArray[i].split(' '));
        multidimensionalArray[i] = multidimensionalArray[i].map(Number);
    }

    while (cordinates.length > 0) {
        let currCordinates = cordinates.shift();
        let bombValue = multidimensionalArray[currCordinates[0]][currCordinates[1]];

        if (bombValue <= 0) continue;

        for (let i = 0; i < multidimensionalArray.length; i++) {
            for (let j = 0; j < multidimensionalArray[i].length; j++) {
                let tempValue = 0;
                if (currCordinates[0] - 1 === i) {
                    if (currCordinates[1] - 1 === j) {
                        tempValue = multidimensionalArray[i][j] - bombValue;
                        multidimensionalArray[i].splice(j, 1, tempValue);
                    } else if (currCordinates[1] === j) {
                        tempValue = multidimensionalArray[i][j] - bombValue;
                        multidimensionalArray[i].splice(j, 1, tempValue);
                    } else if (currCordinates[1] + 1 === j) {
                        tempValue = multidimensionalArray[i][j] - bombValue;
                        multidimensionalArray[i].splice(j, 1, tempValue);
                    }
                } else if (currCordinates[0] === i) {
                    if (currCordinates[1] - 1 === j) {
                        tempValue = multidimensionalArray[i][j] - bombValue;
                        multidimensionalArray[i].splice(j, 1, tempValue);
                    } else if (currCordinates[1] === j) {
                        tempValue = multidimensionalArray[i][j] - bombValue;
                        multidimensionalArray[i].splice(j, 1, tempValue);
                    } else if (currCordinates[1] + 1 === j) {
                        tempValue = multidimensionalArray[i][j] - bombValue;
                        multidimensionalArray[i].splice(j, 1, tempValue);
                    }
                } else if (currCordinates[0] + 1 === i) {
                    if (currCordinates[1] - 1 === j) {
                        tempValue = multidimensionalArray[i][j] - bombValue;
                        multidimensionalArray[i].splice(j, 1, tempValue);
                    } else if (currCordinates[1] === j) {
                        tempValue = multidimensionalArray[i][j] - bombValue;
                        multidimensionalArray[i].splice(j, 1, tempValue);
                    } else if (currCordinates[1] + 1 === j) {
                        tempValue = multidimensionalArray[i][j] - bombValue;
                        multidimensionalArray[i].splice(j, 1, tempValue);
                    }
                }
            }
        }
        totalSnowballDamage += bombValue;
        countSnowball++;
    }

    for (let i = 0; i < multidimensionalArray.length; i++) {
        for (let j = 0; j < multidimensionalArray[i].length; j++) {
            if (multidimensionalArray[i][j] > 0) {
                totalSnowballDamage += multidimensionalArray[i][j];
                countSnowball++;
            }
        }
    }
    console.log(totalSnowballDamage + '\n' + countSnowball);
}
bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']);

bunnyKill(['10 10 10',
           '10 10 10',
           '10 10 10',
'0,0']);