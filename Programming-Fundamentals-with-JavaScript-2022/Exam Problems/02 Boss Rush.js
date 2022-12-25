function bossRush(inputArr) {
    const numberLine = Number(inputArr.shift());
    const pattern = /\|(?<boss>[A-z]{4,})\|\:#(?<title>[a-zA-z]+ [a-zA-z]+)#/g;

    for (let i = 0; i < numberLine; i++) {
        let currentLine = inputArr[i];
        let matches = pattern.exec(currentLine);

        if (matches !== null) {
            let bossName = matches.groups.boss;
            let titleName = matches.groups.title;

            console.log(`${bossName}, The ${titleName}\n>> Strength: ${bossName.length}\n>> Armor: ${titleName.length}`);

            pattern.lastIndex = 0;
        } else {

            console.log('Access denied!');
        }
    }
}

bossRush(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#']);

bossRush(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#']);

