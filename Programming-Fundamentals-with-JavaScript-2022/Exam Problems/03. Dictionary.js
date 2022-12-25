function dictionary(inputArr) {
    const dictionaryObj = {};
    const pairWords = inputArr[0].split(' | ');
    const examWords = inputArr[1].split(' | ');
    const command = inputArr[2];

    for (let pair of pairWords) {
        let [word, definition] = pair.split(': ');
        if (dictionaryObj[word] === undefined) {
            dictionaryObj[word] = [];
        }

        dictionaryObj[word].push(definition);
    }

    if (command === 'Test') {
        examWords.forEach(word => {
            if (dictionaryObj[word]) {
                console.log(`${word}:`);
                dictionaryObj[word].forEach(defin => console.log(` -${defin}`));
            }
        });

    } else if (command === 'Hand Over') {
        let printLine = '';
        for (let prop in dictionaryObj) {
            printLine += prop + ' ';
        }

        printLine = printLine.trim();
        console.log(printLine);
    }
}


// dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",
// "fish | domino",
// "Hand Over"])

// dictionary(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
//     "care | kitchen | flower",
//     "Test"])

dictionary(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test"])
