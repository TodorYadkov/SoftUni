function house(input) {
    let n = Number(input[0]);
    let starsNumber = 1;
    if (n % 2 === 0) {
        starsNumber++;
    }
    for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
        let underscoreNumber = (n - starsNumber) / 2;
        console.log("-".repeat(underscoreNumber) + "*".repeat(starsNumber)
            + "-".repeat(underscoreNumber));
        starsNumber += 2;
    }
    for (let i = 0; i <= Math.floor((n / 2) - 1); i++) {
        console.log("|" + "*".repeat(n - 2) + "|");
    }
}
house(["3"])