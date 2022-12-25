function censoredWords(sentence, word) {
    
    while (sentence.includes(word)) {
        sentence = sentence.replace(word, '*'.repeat(word.length));
    }
    console.log(sentence);
}

censoredWords('A small sentence with small some words sdsmall', 'small');
censoredWords('Find the hidden word hidden hidden hidden hidden 12hiddenss', 'hidden');