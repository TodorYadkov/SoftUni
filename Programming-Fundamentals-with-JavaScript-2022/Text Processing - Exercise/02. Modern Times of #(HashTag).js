function hashTag(string) {
  let stringToArray = string.split(" ");
  for (let el of stringToArray) {
    let isValidWord = true;
    if (el.includes("#") && el.length > 1) {
      let tempWord = el.slice(1);
      for (let char of tempWord) {
        let asciiCode = char.charCodeAt();
        if (!((asciiCode >= 65 && asciiCode <= 90) ||
            (asciiCode >= 97 && asciiCode <= 122))) {
          isValidWord = false;
        }
      }
      if (isValidWord) {
        console.log(tempWord);
      }
    }
  }
}

hashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');
