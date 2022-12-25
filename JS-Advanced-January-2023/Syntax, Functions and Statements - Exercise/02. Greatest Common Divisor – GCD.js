function greatestCommmonDivisor(numberOne, numberTwo) {
    let divisorFirstNumber = [];
    let divisorSecondNumber = [];
    let gCD = 0;
    
    for (let i = 1; i <= numberOne; i++) {
        if (numberOne % i === 0) {
            divisorFirstNumber.push(i);
        }
    }

    for (let i = 1; i <= numberTwo; i++) {
        if (numberTwo % i === 0) {
            divisorSecondNumber.push(i);
        }
    }

    for (let firstDiviser of divisorFirstNumber) {
        for (let secondDiviser of divisorSecondNumber) {
            if (firstDiviser === secondDiviser) {
                if (gCD < firstDiviser) {
                    gCD = firstDiviser;
                }
            }
        }
    }
    console.log(gCD)
}
greatestCommmonDivisor(15, 5);
greatestCommmonDivisor(2154, 458);
