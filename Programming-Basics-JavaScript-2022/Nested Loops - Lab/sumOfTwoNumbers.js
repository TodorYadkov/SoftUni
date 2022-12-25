function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let countCombination = 0;
    let check = true;
    loop1:
    for (let a = startNumber; a <= endNumber; a++) {
        for ( let b = startNumber; b <= endNumber; b++) {
            countCombination ++;
            if (a + b === magicNumber) {
                console.log(`Combination N:${countCombination} (${a} + ${b} = ${magicNumber})`);
                check = false;
                break loop1;
            }
        }
    }
    if (check) {
        console.log(`${countCombination} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["1",
"10",
"5"])