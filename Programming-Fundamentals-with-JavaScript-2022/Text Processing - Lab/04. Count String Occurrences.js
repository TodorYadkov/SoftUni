function stringOccurrences(text, searchedWord) {
    let count = 0;
    let textToArray = text.split(' ');
    for (let i = 0; i < textToArray.length; i++) {
        textToArray[i] === searchedWord ? count++ : '';
    }
    console.log(count)
}
stringOccurrences("This is a word and it also is a sentence", "is");
stringOccurrences("softuni is great place for learning new programming languages","softuni");
