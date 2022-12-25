function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let numberToString = "";
        for (let j = 1; j <= i; j++) {
            numberToString = String(i) + " ";
            numberToString = numberToString.repeat(i);
        }
        console.log(numberToString);
    }
}
triangleOfNumbers(5)