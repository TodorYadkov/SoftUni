function stringSubstring(word, text) {
    let toLowercaseLetters = text.toLocaleLowerCase().split(' ');
    let searchedWord = word.toLocaleLowerCase();
    for (let el of toLowercaseLetters) {
        if (searchedWord === el) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('javascript', 'JavaScripts is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');