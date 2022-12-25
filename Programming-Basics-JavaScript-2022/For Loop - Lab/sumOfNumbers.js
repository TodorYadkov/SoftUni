function sumNumber(input) {
    let numToString = input[0];
    let count = 0;
    
    for (let i = 0; i < numToString.length; i++) {
        let number = Number(numToString[i]);
        count += number;
    }
    console.log(`The sum of the digits is:${count}`);
}
sumNumber(["564891"])