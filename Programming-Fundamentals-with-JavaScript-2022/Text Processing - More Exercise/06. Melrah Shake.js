function melrahShake(input) {

    let string = input[0];
    let pattern = input[1];

    while (pattern.length > 0) {
        let firstMatch = string.indexOf(pattern);
        let lastMatch = string.lastIndexOf(pattern);
        let firstPartString = string.substring(0, firstMatch);
        let secondPartString = string.substring(firstMatch + pattern.length, lastMatch);
        let thirdPartString = string.substring(lastMatch + pattern.length);
        
        if ((firstMatch === -1 && lastMatch === -1) || firstMatch === lastMatch) {
            break;
        } else {
            string = firstPartString + secondPartString + thirdPartString;
            console.log('Shaked it.');
        }

        let firstPartPattern = pattern.slice(0, pattern.length / 2);
        let secondPartPattern = pattern.slice(pattern.length / 2 + 1);
        pattern = firstPartPattern + secondPartPattern;
    }
    console.log('No shake.');
    console.log(string);
}

melrahShake(['astalavista baby', 'sta']);
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);