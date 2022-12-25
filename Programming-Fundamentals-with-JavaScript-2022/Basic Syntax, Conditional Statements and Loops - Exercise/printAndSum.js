function printAndSum(n1,n2) {
    let sum = 0;
    let row = "";
    for (let i = n1; i <= n2; i++) {
        sum += i;
        row += i + " ";
    }
    console.log(row);
    console.log("Sum: " + sum);
}
printAndSum(5,10)