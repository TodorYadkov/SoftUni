function sunglasses(input) {
    let n = Number(input[0]);
    console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));
    for (let i = 0; i < n - 2; i++) {
        let middleLine = "";
        if (i === Math.floor((n - 1) / 2 - 1)) {
            middleLine += "|".repeat(n);
        } else {
           middleLine += " ".repeat(n);
        }
        console.log("*" + "/".repeat(2 * n - 2) + "*" + `${middleLine}` 
        + "*" + "/".repeat(2 * n - 2) + "*");
    }
    console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));
}
sunglasses(["5"])