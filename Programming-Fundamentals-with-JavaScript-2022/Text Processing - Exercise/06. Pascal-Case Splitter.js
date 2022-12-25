function pascalCaseSplitter(input) {
    let letters = input.split('');
    let result = '';
    for (let char of letters) {
        if (char === char.toUpperCase()) {
            result += ' ' + char;
        } else {
            result += char;
        }
    }
    console.log(result.trim().split(' ').join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');