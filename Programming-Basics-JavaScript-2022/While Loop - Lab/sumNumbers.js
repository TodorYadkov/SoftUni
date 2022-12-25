function sumNumbers(input) {
    let number = Number(input[0]);
    let sumOfNumbers = 0;
    let index = 1;

    while (sumOfNumbers < number) {
        let nextNumber = Number(input[index]);
        sumOfNumbers += nextNumber;
        index ++;
    }
    console.log(sumOfNumbers);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

