function amazingNumbers(number) {
    let textumber = number.toString();
    let sum = 0;
    for (let i = 0; i < textumber.length; i++) {
        sum += Number(textumber[i]);
    }
    let result = sum.toString().includes('9');
    console.log(result ? `${textumber} Amazing? True` :
    `${textumber} Amazing? False`);
}
amazingNumbers(1233)
amazingNumbers(999)