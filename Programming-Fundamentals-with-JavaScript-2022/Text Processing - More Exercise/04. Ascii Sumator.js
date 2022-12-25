function asciiSumator(input) {
    let firstChar = Math.min(input[0].charCodeAt(),input[1].charCodeAt());
    let secondChar = Math.max(input[0].charCodeAt(),input[1].charCodeAt());
    let searchedString = input[2];
    let sum = 0;

    for (let char of searchedString) {
        let tempChar = char.charCodeAt();
        if (tempChar > firstChar && tempChar < secondChar) {
            sum += tempChar;
        }
    }
    console.log(sum);
}

asciiSumator(['.', '@', 'dsg12gr5653feee5']);
asciiSumator(['?', 'E', '@ABCEF']);
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);