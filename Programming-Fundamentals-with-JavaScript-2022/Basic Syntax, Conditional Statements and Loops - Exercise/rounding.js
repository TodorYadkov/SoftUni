function rounding(n,decimalNum) {
    if (decimalNum > 15) {
        decimalNum = 15;
    }
    let rounded = n.toFixed(decimalNum);
    rounded = Number.parseFloat(rounded);
    console.log(rounded);
}
rounding(10.5,3)