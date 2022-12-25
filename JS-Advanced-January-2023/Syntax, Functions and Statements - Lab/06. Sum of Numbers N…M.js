function sumOfNumbersNToM(inputNum1, inputNum2) {
    let num1 = Number(inputNum1);
    let num2 = Number(inputNum2);
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
}
console.log(sumOfNumbersNToM('2', '5'));
console.log(sumOfNumbersNToM('-8', '20'));