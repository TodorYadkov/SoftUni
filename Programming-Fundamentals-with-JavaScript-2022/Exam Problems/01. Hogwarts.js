function hogwarts(inputArr) {
    let wordToDecipher = inputArr.shift();

    while (inputArr[0] !== 'Abracadabra') {
        let [currentCommand, ...tokens] = inputArr.shift().split(' ');

        switch (currentCommand) {
            case 'Abjuration':
                wordToDecipher = wordToDecipher.toLocaleUpperCase();
                console.log(wordToDecipher);

                break;
            case 'Necromancy':
                wordToDecipher = wordToDecipher.toLocaleLowerCase();
                console.log(wordToDecipher);

                break;
            case 'Illusion':
                let index = Number(tokens[0]);
                let letter = tokens[1];
                let wordToArr = wordToDecipher.split('');

                if (wordToArr[index]) {
                    wordToArr.splice(index, 1, letter);
                    wordToDecipher = wordToArr.join('');
                    console.log('Done!');
                } else {
                    console.log('The spell was too weak.')
                }

                break;
            case 'Divination':
                let firstSubStr = tokens[0];
                let secondSubStr = tokens[1];
                if (wordToDecipher.includes(firstSubStr)) {
                    let regex = new RegExp(`${firstSubStr}`, 'g');
                    wordToDecipher = wordToDecipher.replace(regex, secondSubStr);
                    console.log(wordToDecipher);
                }

                break;
            case 'Alteration':
                let substringToRemove = tokens[0];
                if (wordToDecipher.includes(substringToRemove)) {
                    let indexStart = wordToDecipher.indexOf(substringToRemove);
                    let indexEnd = indexStart + substringToRemove.length;
                    let firstPartWord = wordToDecipher.substring(0, indexStart);
                    let secondPartWord = wordToDecipher.substring(indexEnd);

                    wordToDecipher = firstPartWord + secondPartWord;
                    console.log(wordToDecipher);
                }

                break;
            default:
                console.log('The spell did not work!');
                break;
        }
    }
}

hogwarts(['pesp', 'Divination p t', 'Abracadabra'])

hogwarts(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"]);

hogwarts(["TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"]);

hogwarts(["SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"]);