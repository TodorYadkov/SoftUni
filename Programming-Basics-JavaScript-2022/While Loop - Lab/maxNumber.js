function maxNumber(input) {
    let count = 0;
    let text = input[count];
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (text !== "Stop") {
        text = input[count];
        if (text === "Stop") {
            break;
        }
        text = Number(text);
        if (maxNum < text) {
            maxNum = text;
        }
        count ++;
    }
    console.log(maxNum);
}
maxNumber(["-1","-2","Stop"])
