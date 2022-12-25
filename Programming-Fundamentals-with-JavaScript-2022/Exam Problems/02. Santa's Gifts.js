function santaGift(inputArr) {
    const numberOfCmd = Number(inputArr.shift());
    const houseNumbers = inputArr.shift().split(' ').map(x => Number(x));
    let positionSanta = 0;

    for (let i = 0; i < numberOfCmd; i++) {
        let [cmd, ...tokens] = inputArr.shift().split(' ');
        tokens = tokens.map(Number);
        switch (cmd) {
            case 'Forward':
                positionSanta = forward(tokens);
                break;
            case 'Back':
                positionSanta = back(tokens);
                break;
            case 'Gift':
                positionSanta = gift(tokens);
                break;
            case 'Swap':
                swap(tokens);
                break;
        }
    }

    console.log(`Position: ${positionSanta}`);
    console.log(houseNumbers.join(', '));

    // function
    function forward([numOfStep]) {
        let indexToMove = positionSanta + numOfStep;

        if (houseNumbers[indexToMove]) {
            houseNumbers.splice(indexToMove, 1);
            positionSanta = indexToMove;
        }

        return positionSanta;
    }

    function back([numOfStep]) {
        let indexToMove = positionSanta - numOfStep;

        if (houseNumbers[indexToMove]) {
            houseNumbers.splice(indexToMove, 1);
            positionSanta = indexToMove;
        }

        return positionSanta;
    }

    function gift([index, hNumber]) {

        if (index < 0 || index >= houseNumbers.length) {
            return positionSanta;
        }

        houseNumbers.splice(index, 0, hNumber);
        positionSanta = index;

        return positionSanta;
    }

    function swap([numHouse1, numHouse2]) {
        if (houseNumbers.includes(numHouse1) && houseNumbers.includes(numHouse2)) {
            let indexHouse1 = houseNumbers.indexOf(numHouse1);
            let indexHouse2 = houseNumbers.indexOf(numHouse2);

            [houseNumbers[indexHouse1], houseNumbers[indexHouse2]] = [houseNumbers[indexHouse2], houseNumbers[indexHouse1]];
        }
    }
}

santaGift(['5',
    '255 500 54 78 98 24 30 47 69 58',
    'Forward 1',
    'Swap 54 47',
    'Gift 1 20',
    'Back 1',
    'Forward 3']);

santaGift(['6',
    '50 40 25 63 78 54 66 77 24 87',
    'Forward 4',
    'Back 3',
    'Forward 3',
    'Gift 2 88',
    'Swap 50 87',
    'Forward 1']);