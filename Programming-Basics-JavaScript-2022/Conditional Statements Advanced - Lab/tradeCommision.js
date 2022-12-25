function trade(input) {
    let city = input[0];
    let sells = input[1];
    let commision = 0;
    let check = false;

    if (city == "Sofia") {
        if (sells >= 0 && sells <= 500) {
            commision = sells * 0.05;
        } else if (sells > 500 && sells <= 1000) {
            commision = sells * 0.07;
        } else if (sells > 1000 && sells <= 10000) {
            commision = sells * 0.08;
        } else if (sells > 10000) {
            commision = sells * 0.12;
        } else {
            check = true;
        }
    } else if (city == "Varna") {
        if (sells >= 0 && sells <= 500) {
            commision = sells * 0.045;
        } else if (sells > 500 && sells <= 1000) {
            commision = sells * 0.075;
        } else if (sells > 1000 && sells <= 10000) {
            commision = sells * 0.10;
        } else if (sells > 10000) {
            commision = sells * 0.13;
        } else {
            check = true;
        }
    } else if (city == "Plovdiv") {
        if (sells >= 0 && sells <= 500) {
            commision = sells * 0.055;
        } else if (sells > 500 && sells <= 1000) {
            commision = sells * 0.08;
        } else if (sells > 1000 && sells <= 10000) {
            commision = sells * 0.12;
        } else if (sells > 10000) {
            commision = sells * 0.145;
        } else {
            check = true;
        }
    } else {
        check = true;
    }
    
    if (check == true) {
        console.log("error");
    } else {
        console.log(commision.toFixed(2));
    }
}
trade(["Kaspichan",
"-50"])


