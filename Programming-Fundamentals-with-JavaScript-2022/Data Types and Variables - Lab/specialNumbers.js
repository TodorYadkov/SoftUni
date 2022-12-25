function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let numToString = i.toString();
        for (let j = 0; j < numToString.length; j++) {
            sum += Number(numToString[j]);
        }
        console.log(sum === 5 || sum === 7 || sum === 11 ? `${i} -> True`: `${i} -> False`);
    }
}
specialNumbers(15);
specialNumbers(20);