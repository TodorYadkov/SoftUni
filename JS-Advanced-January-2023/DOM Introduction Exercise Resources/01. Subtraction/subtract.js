function subtract() {
    const firstNum = document.getElementById('firstNumber');
    const secondNum = document.getElementById('secondNumber');
    firstNum.removeAttribute('disabled');
    secondNum.removeAttribute('disabled');
    const result = Number(firstNum.value) - Number(secondNum.value);
    document.getElementById('result').textContent = result;
}