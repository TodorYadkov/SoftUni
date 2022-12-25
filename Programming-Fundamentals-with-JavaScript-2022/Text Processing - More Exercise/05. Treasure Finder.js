function treasureFinder(input) {
    let result = [];
    let key = input.shift().split(' ');
    // start looping every element of input
    while (input[0] !== 'find') {
        let string = input.shift();
        let tempResult = '';
        let indexKey = 0;
        // loop through every character and decrease the ASCII code with a corresponding number of the key
        for (let char of string) {
            let asciiNumber = char.charCodeAt();
            asciiNumber -= key[indexKey++];
            if (indexKey >= key.length) {
                indexKey = 0;
            }
            tempResult += String.fromCharCode(asciiNumber);
        }
        result.push(tempResult);
    }
    result.forEach(el => {
        let treasureStartIndex = el.indexOf('&') + 1;
        let treasureEndIndex = el.lastIndexOf('&');
        let corordinatesStartIndex = el.indexOf('<') + 1;
        let corordinatesEndIndex = el.lastIndexOf('>');
        console.log(`Found ${el.substring(treasureStartIndex, treasureEndIndex)} at ${el.substring(corordinatesStartIndex, corordinatesEndIndex)}`);
    });
}

treasureFinder(['1 2 1 3', 'ikegfp\'jpne)bv=41P83X@', 'ujfufKt)Tkmyft\'duEprsfjqbvfv=53V55XA', 'find']);
treasureFinder(['1 4 2 5 3 2 1', 'Ulgwh"jt$ozfj!\'kqqg(!bx"A3U237GC', 'tsojPqsf$(lrne\'$CYfqpshksdvfT$>634O57YC', '\'stj)>34W68Z@', 'find']);