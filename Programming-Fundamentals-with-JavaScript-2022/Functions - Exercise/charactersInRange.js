function charactersInRange(char1, char2) {

    char1 = char1.charCodeAt(0);
    char2 = char2.charCodeAt(0);
    let minNumberChar = minNumberCharacter(char1,char2);
    let maxNumberChar = maxNumberCharacter(char1,char2);
    console.log(printResult(minNumberChar,maxNumberChar));

    function minNumberCharacter(ch1, ch2) {
        let firstCharPlace = Math.min(ch1, ch2);
        return firstCharPlace;
    }

    function maxNumberCharacter(ch1,ch2) {
        let secondCharPlace = Math.max(ch1,ch2);
        return secondCharPlace;
    }

    function printResult(minNumberChar,maxNumberChar) {
        let result = '';
        for (let i = minNumberChar + 1; i < maxNumberChar; i++) {
            result += String.fromCharCode(i) + ' ';
        }
        return result;
    }
}
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');