function mathOperations(num1, num2, operand) {
    const operands = new Map();
    operands.set('+', '+').set('-', '-').set('*', '*').set('/', '/').set('%', '%').set('**', '**');
    console.log(eval(`${num1} ${operands.get(operand)} ${num2}`));
}

mathOperations(5, 6, '+');
mathOperations(2, 3, '-');
mathOperations(2, 3, '*');
mathOperations(2, 3, '/');
mathOperations(2, 3, '%');
mathOperations(2, 3, '**');

// function mathOperations(num1, num2, operand) {
//     let result = 0;
//     switch (operand) {
//         case '+': result = num1 + num2; break;
//         case '-': result = num1 - num2;  break;
//         case '*': result = num1 * num2;  break;
//         case '/': result = num1 / num2;  break;
//         case '%': result = num1 % num2;  break;
//         case '**': result = num1 ** num2;  break;
//     }
//     console.log(result);
// }
