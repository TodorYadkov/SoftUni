function division(n) {
    let divider = 0;
    if (n % 2 === 0) {
        divider = 2;
    }
     if (n % 3 === 0) {
        divider = 3;
    } 
    if (n % 6 === 0) {
        divider = 6;
    } 
    if (n % 7 === 0) {
        divider = 7;
    } 
    if (n % 10 === 0) {
        divider = 10;
    }
    if (divider === 0) {
        console.log("Not divisible");
    } else {
        console.log(`The number is divisible by ${divider}`)
    }
}
division(30)
division(15)
division(12)
division(1643)