function highJunmp(input) {
    let index = 0;
    let desiredHigh = Number(input[index]);
    index++;
    let countTotalJump = 0;
    let unsuccessfulJump = 0;
    let startHeight = desiredHigh - 30;
    let start = true;
    while (start) {
        let currHeigh = Number(input[index]);
        index++;
        countTotalJump++;
        let lastHeight = startHeight;
        if (currHeigh > startHeight) {
            startHeight += 5;
            unsuccessfulJump = 0;
            if (startHeight > desiredHigh) {
                console.log(`Tihomir succeeded, he jumped over ${lastHeight}cm after ${countTotalJump} jumps.`);
                start = false;
                break;
            }
        } else {
            unsuccessfulJump++;
            if (unsuccessfulJump === 3) {
                console.log(`Tihomir failed at ${lastHeight}cm after ${countTotalJump} jumps.`);
                start = false;
                break;
            }
        }
    }
}
highJunmp(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])