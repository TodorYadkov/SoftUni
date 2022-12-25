function getFibonator() {
    let previousNum = 1;
    let currentNumber = 0;
    let currentResult = 0;

    function calc() {
        if (previousNum === 1 && currentNumber === 0) {
            previousNum = 0;
            currentNumber = 1;
            return 1;
        } else {
            currentResult = previousNum + currentNumber;
            previousNum = currentNumber;
            currentNumber = currentResult;
        }

        return currentResult;
    }

    return calc;
}

let fib = getFibonator();
console.log(fib()); // 1    0 1
console.log(fib()); // 1    0 1
console.log(fib()); // 2    1 1
console.log(fib()); // 3    2 1
console.log(fib()); // 5    3 2
console.log(fib()); // 8    5 3
console.log(fib()); // 13   8 5
