function vowelsSum(input) {
    let string = input[0].toLowerCase();
    let letterA = 0;
    let letterE = 0;
    let letterI = 0;
    let letterO = 0;
    let letterU = 0;
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "a") {
            letterA ++; 
        } else if (string[i] == "e") {
            letterE +=2;
        } else if (string[i] == "i") {
            letterI +=3;
        } else if (string[i] == "o") {
            letterO +=4;
        } else if (string[i] == "u") {
            letterU +=5;
        }
    }
    console.log(`${letterA + letterE + letterI + letterO + letterU}`);
}
vowelsSum(["beer"])