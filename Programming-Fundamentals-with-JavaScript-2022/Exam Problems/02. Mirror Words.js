function mirrorWords(input) {
    let str = input[0];
    const pattern = /([@|#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    const mirrWords = [];
    let wordsCount = 0;
    let isFindWordPairs = false;
    let isFindMirrorWords = false;

    if (pattern.test(str)) {
        isFindWordPairs = true;
        wordsCount = str.match(pattern).length;
        let result = pattern.exec(str);

        while (result !== null) {
            let firstWord = result.groups.firstWord;
            let secondWord = result.groups.secondWord;

            if (firstWord.split('').reverse().join('') === secondWord) {
                mirrWords.push(`${firstWord} <=> ${secondWord}`);
                isFindMirrorWords = true;
            }
            result = pattern.exec(str);
        }
    } else {
        console.log('No word pairs found!\nNo mirror words!');
    }

    if (isFindWordPairs) {
        console.log(`${wordsCount} word pairs found!`);
        if (isFindMirrorWords) {
            console.log(`The mirror words are:\n${mirrWords.join(', ')}`);
        } else {
            console.log('No mirror words!');
        }
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
// mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);