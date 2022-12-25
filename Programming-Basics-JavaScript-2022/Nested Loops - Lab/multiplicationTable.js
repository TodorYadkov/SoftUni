function multiplicationTable(input) {
    for (a = 1; a <= 10; a++) {
        for (b = 1; b <= 10; b++){
            let result = a * b;
            console.log(`${a} * ${b} = ${result}`);
        }
    }
}
multiplicationTable()