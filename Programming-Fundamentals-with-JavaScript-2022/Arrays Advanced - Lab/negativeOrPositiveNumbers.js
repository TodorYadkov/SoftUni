function negativeOrPositiveNumbers(inputArray) {
    let newArray = [];

    for (let element of inputArray) {
        if (element < 0) {
            newArray.unshift(element);
        } else {
            newArray.push(element);
        }
    }
    console.log(newArray.join('\n'))
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);