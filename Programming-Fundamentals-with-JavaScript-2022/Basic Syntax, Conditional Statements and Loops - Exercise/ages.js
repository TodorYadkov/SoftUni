function ages(n) {
    let text = "";
    if (n < 0) {
        text = "out of bounds";
    } else if (n >= 0 && n <= 2) {
        text = "baby";
    } else if (n <= 13) {
        text = "child";
    } else if (n <= 19) {
        text = "teenager";
    } else if (n <= 65) {
        text = "adult";
    } else if (n >= 66) {
        text = "elder";
    }
    console.log(text);
}
ages(100)