function starEnigma(input) {
    const pattern = /([^@\-:!>]*)@(?<planet>[A-Z]+)([^@\-:!>]*):(?<population>\d+)([^@\-:!>]*)!(?<attackType>[A|D])!([^@\-:!>]*)->(?<soldierCount>\d+)([^@\-:!>]*)/gi;
    const key = ['s', 't', 'a', 'r'];
    let workArr = input.slice();
    let attackPlanet = [];
    let destroyedPlanet = [];
    let numberOfMessages = Number(workArr.shift());
    // decipher the encrypted message and take the planets
    for (let i = 0; i < numberOfMessages; i++) {
        let currMessage = workArr[i];
        let match = pattern.exec(decryptMessage(currMessage, equalCharacter(key, currMessage)));
        if (match !== null) {
            if (match.groups.attackType === 'A') {
                attackPlanet.push(match.groups.planet);
            } else if (match.groups.attackType === 'D') {
                destroyedPlanet.push(match.groups.planet);
            }
        }
        pattern.lastIndex = 0;
    }

    // sort the planet ASC and print final result
    console.log(`Attacked planets: ${attackPlanet.length}`);
    attackPlanet.sort().forEach(el => console.log(`-> ${el}`));

    console.log(`Destroyed planets: ${destroyedPlanet.length}`);
    destroyedPlanet.sort().forEach(el => console.log(`-> ${el}`));

    // count the same character in the message and in the key
    function equalCharacter(key, message) {
        let countSame = 0;
        for (let char of key) {
            for (let charMessage of message) {
                if (char === charMessage.toLocaleLowerCase()) {
                    countSame++;
                }
            }
        }
        return countSame;
    }

    // decrypt the message - subtract from each character ascii number the number of equals
    function decryptMessage(message, countMatch) {
        let decryptedMessage = '';
        for (let charMessage of message) {
            decryptedMessage += String.fromCharCode(charMessage.charCodeAt() - countMatch);
        }
        return decryptedMessage;
    }
}
// starEnigma(['2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR']);

// starEnigma(['3',
//     "tt(''DGsvywgerx>6444444444%H%1B9444",
//     'GQhrr|A977777(H(TTTT',
//     'EHfsytsnhf?8555&I&2C9555SR']);


// starEnigma(['3',
//     "tt(''DGsvywgerx>6444444444%H%1B9444",
//     'GQhrr|A977777(H(TTTT',
//     'EHfsytsnhf?8555&I&2C9555SR']);