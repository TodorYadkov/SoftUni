function diamond(input) {
    let n = Number(input[0]);
    let starsNumber = 1;
    let leftRight = Math.floor((n - 1) / 2);
    if (n % 2 === 0) {
        starsNumber++;
    }
    if (n === 1) {
        console.log("*");
    } else if (n === 2) {
        console.log("**");
    } else {
        for (let i = 1; i <= (n - 1) / 2; i++) {
            let mid = n - 2 * leftRight - 2;
            if (mid >= 0) {
                console.log("-".repeat(leftRight) + "*" + "-".repeat(mid)
                    + "*" + "-".repeat(leftRight));
            } else {
                console.log("-".repeat(leftRight) + "*".repeat(starsNumber)
                    + "-".repeat(leftRight));
            }
            leftRight--;
        }
        if (n % 2 === 0) {
            leftRight = 0;
        }
        for (let i = 0; i <= (n - 1) / 2; i++) {
            let mid = n - 2 * leftRight - 2;
            if (mid >= 0) {
                console.log("-".repeat(leftRight) + "*" + "-".repeat(mid)
                    + "*" + "-".repeat(leftRight));
            } else {
                console.log("-".repeat(leftRight) + "*".repeat(starsNumber)
                    + "-".repeat(leftRight));
            }
            leftRight++;
        }
    }
}
diamond(["7"])