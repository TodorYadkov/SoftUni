function emojiDetector(input) {
    const patternDigit = /\d/g;
    const patternValidEmoji = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let text = input[0];
    let coolEmojiArr = [];
    let countEmoji = 0;
    let thresholdSum = text
        .match(patternDigit)
        .map(x => Number(x))
        .reduce((acc, nextDigit) => acc * nextDigit, 1);

    let validEmoji = patternValidEmoji.exec(text);
    while (validEmoji !== null) {
        countEmoji++;
        let [...tempEmojiArr] = validEmoji.groups.emoji;
        let tempSum = 0;
        for (let char of tempEmojiArr) {
            tempSum += char.charCodeAt();
        }

        if (tempSum >= thresholdSum) {
            coolEmojiArr.push(validEmoji[0]);
        } 
        
        validEmoji = patternValidEmoji.exec(text);
    }

    console.log(`Cool threshold: ${thresholdSum}`);
    console.log(`${countEmoji} emojis found in the text. The cool ones are:\n${coolEmojiArr.join('\n')}`);
}

// emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

// emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the  readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);