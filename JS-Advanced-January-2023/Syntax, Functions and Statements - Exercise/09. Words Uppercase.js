function wordsUppercase(string) {
    const pattern = /[\w]+/g;
    let matchWord = string.match(pattern);
    matchWord = matchWord.map(word => word.toLocaleUpperCase());

    console.log(matchWord.join(', '));
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
wordsUppercase('Functions in JS can be nested, i.e. hol255d other functions');