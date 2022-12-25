function playingCards(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S', 'H', 'D', 'C'];
    let symbols = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    if (faces.includes(face) === false) {
        throw new Error('Invalid face: ' + face);
    }

    if (suits.includes(suit) === false) {
        throw new Error('Invalid suit: ' + suit);
    }

    const result = {
        face,
        suit: symbols[suit],
        toString() {
            return this.face + this.suit
        },
    };

    return result;
}

console.log(playingCards('A', 'S').toString());
console.log(playingCards('10', 'H').toString());
console.log(playingCards('1', 'C').toString());