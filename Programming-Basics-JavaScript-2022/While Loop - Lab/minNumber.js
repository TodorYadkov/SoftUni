function minNumber(input) {
    let count = 0;
    let value = input[count];
    let minNum = Number.MAX_SAFE_INTEGER;

    while (value !== "Stop") {
        value = input[count];
        if (value === "Stop") {
            break;
        }
        value = Number(value);
        if (value < minNum) {
            minNum = value;
        }
        count ++;
    }
    console.log(minNum);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])

