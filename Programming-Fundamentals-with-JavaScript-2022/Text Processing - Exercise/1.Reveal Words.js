function revealWords(words, stringTemplate) {
  let missedWord = words.split(", ");
  let targetWord = stringTemplate.split(" ");
  for (let word of missedWord) {
    for (let tempWord of targetWord) {
      if (word.length === tempWord.length && tempWord.includes("*")) {
        stringTemplate = stringTemplate.replace(tempWord, word);
      }
    }
  }
  console.log(stringTemplate);
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
