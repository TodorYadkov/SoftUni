function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            if (result % 2 == 0) {
                console.log(`${num1} + ${num2} = ${result} - even`);
            } else {
                console.log(`${num1} + ${num2} = ${result} - odd`);
            }
        break;
        case "-":
            result = num1 - num2;
            if (result % 2 == 0) {
                console.log(`${num1} - ${num2} = ${result} - even`);
            } else {
                console.log(`${num1} - ${num2} = ${result} - odd`);
            }
        break;
        case "*":
            result = num1 * num2;
            if (result % 2 == 0) {
                console.log(`${num1} * ${num2} = ${result} - even`);
            } else {
                console.log(`${num1} * ${num2} = ${result} - odd`);
            }
        break;
        case "/":
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
            }
        break;
        case "%":
            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 % num2;
                console.log(`${num1} % ${num2} = ${result}`);
            }
        break;
    }
}
operationsBetweenNumbers(["10",
"0",
"%"])





