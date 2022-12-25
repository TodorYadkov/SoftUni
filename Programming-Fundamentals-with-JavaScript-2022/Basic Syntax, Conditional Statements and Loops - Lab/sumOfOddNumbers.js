function sumOfOddNumbers(n) {
    let sum = 0;
    let oddNumber = 1;
    for (let i = 1; i <= n; i++) {
        if (oddNumber % 2 !== 0) {
            console.log(oddNumber);
            sum += oddNumber;
        }
        oddNumber +=2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(3)