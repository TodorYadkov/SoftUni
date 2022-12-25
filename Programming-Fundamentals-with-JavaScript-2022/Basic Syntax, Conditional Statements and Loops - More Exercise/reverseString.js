function reverseString(input) {
    let parseToString = String(input);
    let stringToNumberLength = parseToString.length - 1;
    let reverseInput = "";
    for (let i = stringToNumberLength; i >= 0; i--) {
        let currSymbol = parseToString[i];
        reverseInput += currSymbol;
    }
    console.log(reverseInput);
}
reverseString("1234")