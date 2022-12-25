function thePianist(input) {
    const command = [...input];
    const numberPiece = Number(command.shift());
    const favoriteList = {};
    const pieces = command.splice(0, numberPiece).forEach(piece => {
        let token = piece.split('|');
        if (!favoriteList.hasOwnProperty(token[0])) {
            favoriteList[token[0]] = { composer: token[1], key: token[2] };
        }
    });

    while (command[0] !== 'Stop') {
        let token = command.shift().split('|');
        let piece = token[1];
        let composer = token[2];
        let key = token[3];
        if (token[0] === 'ChangeKey') {
            key = composer;
        }
        switch (token[0]) {
            case 'Add':
                if (!favoriteList.hasOwnProperty(piece)) {
                    favoriteList[piece] = {composer, key};
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            case 'Remove':
                if (favoriteList.hasOwnProperty(piece)) {
                    delete favoriteList[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                if (favoriteList.hasOwnProperty(piece)) {
                    favoriteList[piece].key = key;
                    console.log(`Changed the key of ${piece} to ${key}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }
    }

    for (let prop in favoriteList) {
        console.log(`${prop} -> Composer: ${favoriteList[prop].composer}, Key: ${favoriteList[prop].key}`);
    }
}
// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop']);

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop']);