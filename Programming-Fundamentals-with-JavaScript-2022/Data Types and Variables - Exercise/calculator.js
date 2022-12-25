function calculator(n1,operator,n2) {
    let result = 0;
    if (operator === '+') {
        result = n1 + n2;
    } else if (operator === '-') {
        result = n1 - n2;
    } else if (operator === '*') {
        result = n1 * n2;
    } else if (operator === '/') {
        result = n1 / n2;
    }
    console.log(result.toFixed(2))
}
calculator(5,'+',10)
calculator(25.5,'-',3)
calculator(25.5,'*',3)
calculator(25.5,'/',3)