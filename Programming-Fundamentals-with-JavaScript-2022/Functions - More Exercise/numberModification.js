function numberModification(number) {

    let isNumberCorrect = isSumDigitIsHigherThanFive(number);
    let newNumber = number;

    while (!isNumberCorrect) {
        newNumber = appendNineToTheEnd(newNumber);
        isNumberCorrect = isSumDigitIsHigherThanFive(newNumber);
    }

    if (isNumberCorrect) {
        console.log(newNumber);
    }

    function isSumDigitIsHigherThanFive(number) {
        let numToStr = number.toString();
        let sum = 0;
        for (let i = 0; i < numToStr.length; i++) {
            let currDigit = Number(numToStr[i]);
            sum += currDigit;
        }
        sum /= numToStr.length;
        if (sum > 5) {
            return true;
        }
        return false;
    }

    function appendNineToTheEnd(number) {
        let numToStr = number.toString();
        numToStr += 9;

        return Number(numToStr);
    }
}
numberModification(101);
numberModification(5835);
