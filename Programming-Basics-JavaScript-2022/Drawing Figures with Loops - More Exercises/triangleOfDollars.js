function triangleOfDollars(input) {
    let n = Number(input[0]);
    for (let row = 1; row <= n; row++) {
        let symbol = "$";
        for (let col = 1; col < row; col++) {
            symbol += " $";
        }
        console.log(symbol);
    }
}
triangleOfDollars(["10"])