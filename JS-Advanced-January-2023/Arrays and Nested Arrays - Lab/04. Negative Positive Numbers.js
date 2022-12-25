function negativePositiveNumbers(input) {
    let newArr = [];

    for (let el of input) {
        if (el < 0) {
            newArr.unshift(el);
        } else {
            newArr.push(el);
        }
    }

    newArr.forEach(el => console.log(el));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);