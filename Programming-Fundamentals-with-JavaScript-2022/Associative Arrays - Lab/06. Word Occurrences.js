function wordOccurences(inputString) {
    let wordMap = {};

    for (let el of inputString) {
        let count = 1;
        if (wordMap.hasOwnProperty(el)) {
            count += wordMap[el];
        }
        wordMap[el] = count;
    }

    let sorted = Object.entries(wordMap).sort((a,b) => b[1] - a[1]);
    for (let el of sorted) {
        console.log(`${el[0]} -> ${el[1]} times`);
    }
}

wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);