function factorialDivision(num1, num2) {

    let result = factorialSum(num1) / factorialSum(num2);

    console.log(result.toFixed(2));

    function factorialSum(number) {
        let result = 1;
        if (number == 0 || number == 1) {
            return result;
        } else {
            for (let i = number; i >= 1; i--) {
                result = result * i;
            }
            return result;
        }
    }
}
factorialDivision(6, 2);