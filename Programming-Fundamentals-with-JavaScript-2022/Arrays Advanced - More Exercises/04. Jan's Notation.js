function janNotation(arr) {
    let resultArrray = [];
    let isAllReady = true;
    mainLoop:
    for (let i = 0; i < arr.length; i++) {
        let tempTotal = 0;
        if (isNaN(arr[i])) {
            switch (arr[i]) {
                case '+':
                    if (!isNaN(resultArrray[0]) && !isNaN(resultArrray[1])) {
                        tempTotal = add(resultArrray[resultArrray.length - 2], resultArrray[resultArrray.length - 1]);
                        resultArrray.splice(resultArrray.length - 2, 2, tempTotal);
                    } else {
                        console.log('Error: not enough operands!');
                        isAllReady = false;
                        break mainLoop;
                    }
                    break;
                case '-':
                    if (!isNaN(resultArrray[0]) && !isNaN(resultArrray[1])) {
                        tempTotal = substract(resultArrray[resultArrray.length - 2], resultArrray[resultArrray.length - 1]);
                        resultArrray.splice(resultArrray.length - 2, 2, tempTotal);
                    } else {
                        console.log('Error: not enough operands!');
                        isAllReady = false;
                        break mainLoop;
                    }
                    break;
                case '*':
                    if (!isNaN(resultArrray[0]) && !isNaN(resultArrray[1])) {
                        tempTotal = multipli(resultArrray[resultArrray.length - 2], resultArrray[resultArrray.length - 1]);
                        resultArrray.splice(resultArrray.length - 2, 2, tempTotal);
                    } else {
                        console.log('Error: not enough operands!');
                        isAllReady = false;
                        break mainLoop;
                    }
                    break;
                case '/':
                    if (!isNaN(resultArrray[0]) && !isNaN(resultArrray[1])) {
                        tempTotal = divide(resultArrray[resultArrray.length - 2], resultArrray[resultArrray.length - 1]);
                        resultArrray.splice(resultArrray.length - 2, 2, tempTotal);
                    } else {
                        console.log('Error: not enough operands!');
                        isAllReady = false;
                        break mainLoop;
                    }
                    break;
            }
        } else {
            resultArrray.push(arr[i]);
        }
    }

    if (isAllReady) {
        if (resultArrray.length > 1) {
            console.log('Error: too many operands!');
        } else {
            console.log(resultArrray.join(''));
        }
    }

    function add(num1, num2) {
        return num1 + num2;
    }

    function substract(num1, num2) {
        return num1 - num2;
    }

    function multipli(num1, num2) {
        return num1 * num2;
    }

    function divide(num1, num2) {
        return num1 / num2;
    }
}

janNotation([3, 4, '+']);
janNotation([5, 3, 4, '*', '-']);
janNotation([7, 33, 8, '-']);
janNotation([15, '/']);
janNotation([31, 2, '+', 11, '/']);
janNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);