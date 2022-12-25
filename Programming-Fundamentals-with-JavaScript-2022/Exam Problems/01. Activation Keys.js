function activationKey(input) {
    const command = [...input];
    let rawKey = command.shift();

    while (command[0] !== 'Generate') {
        let currentCommand = command.shift().split('>>>');

        switch (currentCommand[0]) {
            case 'Contains':
                rawKey = contains(currentCommand[1]);
                break;
            case 'Flip':
                rawKey = flip(currentCommand[1], currentCommand[2], currentCommand[3]);
                break;
            case 'Slice':
                rawKey = slice(currentCommand[1], currentCommand[2]);
                break;
        }
    }

    console.log(`Your activation key is: ${rawKey}`);

    function contains(subStr) {
        if (rawKey.includes(subStr)) {
            console.log(`${rawKey} contains ${subStr}`);
        } else {
            console.log('Substring not found!');
        }
        return rawKey;
    }

    function flip(typeLetter, startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        let stringToChange = rawKey.substring(startIndex, endIndex);
        let firstPartRawKey = rawKey.substring(0, startIndex);
        let secondPartRawKey = rawKey.substring(endIndex);
        if (typeLetter === 'Upper') {
            stringToChange = stringToChange.toLocaleUpperCase();
        } else if (typeLetter === 'Lower') {
            stringToChange = stringToChange.toLocaleLowerCase();
        }

        rawKey = firstPartRawKey + stringToChange + secondPartRawKey;
        console.log(rawKey);
        return rawKey;
    }

    function slice(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        let firstPartRawKey = rawKey.substring(0, startIndex);
        let secondPartRawKey = rawKey.substring(endIndex);
        rawKey = firstPartRawKey + secondPartRawKey;

        console.log(rawKey);
        return rawKey;
    }
}

// activationKey(["abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"]);

activationKey(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);