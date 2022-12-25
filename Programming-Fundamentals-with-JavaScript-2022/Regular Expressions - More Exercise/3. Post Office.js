function postOffice(message) {
    const patternParts = /(?<first>.+)\|(?<second>.+)\|(?<third>.+)/g;
    let messagePart = patternParts.exec(message);
    // pattern to get letters and numbers
    const patternLetter = /(?<letter>([\#\$\%\*\&])[A-Z]+\2)/g;
    const patternNumber = /(?<ascii>\d{2}:(0?[0-9]{2}))/g;
    // split message into three parts
    let firstPartOfTheMessage = messagePart.groups.first;
    let secondPartOfTheMessage = messagePart.groups.second;
    let thirdPartOfTheMessage = messagePart.groups.third.split(' ');
    // make an empty object to store the letter and length and make array to save their order
    let asciiLetterAndLength = {};
    let letterOrder = [];
    // get the letters
    let matchLetter = patternLetter.exec(firstPartOfTheMessage);
    while (matchLetter !== null) {
        let currentLetter = matchLetter.groups.letter;
        // check if the letter is uppercase only and insert into an object
        for (let char of currentLetter) {
            if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
                asciiLetterAndLength[char] = null;
                letterOrder.push(char);
            }
        }
        matchLetter = patternLetter.exec(firstPartOfTheMessage);
    }
    // get the numbers
    let matchNumber = patternNumber.exec(secondPartOfTheMessage);
    while (matchNumber !== null) {
        let token = matchNumber.groups.ascii.split(':');
        // get the letter from ascii value
        let currentLetter = String.fromCharCode(token[0]);
        // get the length of the word and add 1 for the capital letter
        let lengthOfWord = Number(token[1]) + 1;
        // check if the letter from the previous string exists and add length
        if (asciiLetterAndLength.hasOwnProperty(currentLetter)) {
            asciiLetterAndLength[currentLetter] = lengthOfWord;
        }
        matchNumber = patternNumber.exec(secondPartOfTheMessage);
    }
    // print final result
    for (let letter of letterOrder) {
        for (let word of thirdPartOfTheMessage) {
            let curretnLetterUpperCase = word[0];
            // check the first letter is uppercase and the length of the word is equal to length - print the word
            if ((letter === curretnLetterUpperCase) && (asciiLetterAndLength.hasOwnProperty(curretnLetterUpperCase))) {
                if (word.length === asciiLetterAndLength[curretnLetterUpperCase]) {
                    console.log(word);
                }
            }
        }
    }
}

// postOffice('sdsGGasA$A$$O$$T$$P$OTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos P@r@haos');
postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig Post');
// postOffice('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos P@r@haos');
// postOffice('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos');