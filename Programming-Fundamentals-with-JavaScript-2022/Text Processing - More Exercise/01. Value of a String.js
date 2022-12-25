function valueOfAString(input) {
    // creating an object to invoke needed function
    let upperOrLowercaseObj = {
        lowercase,
        uppercase,
    }
    // create variable
    let text = input[0];
    let command = input[1].toLocaleLowerCase();
    let sum = 0;
    // get every char from text
    for (let char of text) {
        // invoke our function with [command] and parameter (char)
        sum += upperOrLowercaseObj[command](char);
    }
    // print final result
    console.log(`The total sum is: ${sum}`);
    // function
    function uppercase(char) {
        let asciiCode = char.charCodeAt();
        let isUpperCase = (asciiCode >= 65 && asciiCode <= 90);
        if (isUpperCase) {
            return asciiCode;
        }
        return 0;
    }

    function lowercase(char) {
        let asciiCode = char.charCodeAt();
        let isLowerCase = (asciiCode >= 97 && asciiCode <= 122);
        if (isLowerCase) {
            return asciiCode;
        }
        return 0;
    }
}
valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfAString(['AC/DC','UPPERCASE']);