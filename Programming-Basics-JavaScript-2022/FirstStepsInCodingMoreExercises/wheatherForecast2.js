function wheather(input) {
    let forecast = Number(input[0]);
    
    switch (true) {
        case (forecast >= 26 && forecast <= 35):
            console.log("Hot");
            break;
        case (forecast >= 20.1 && forecast <= 25.9):
            console.log("Warm");
            break;
        case (forecast >= 15.00 && forecast <= 20.00):
            console.log("Mild");
            break;
        case (forecast >= 12 && forecast <= 14.9):
            console.log("Cool");
            break;
        case (forecast >= 5 && forecast <= 11.9):
            console.log("Cold");
            break;
        default:
            console.log("unknown")
            break;
    }
}
wheather([20])