function skiTrip(input) {
    let numOfDay = Number(input[0]);
    let typeRoom = input[1];
    let rating = input[2];
    let roomPrice = 0;
    let totalPrice = 0;
    
   
    numOfDay -= 1;
    

    switch (typeRoom) {
        case "room for one person":
            roomPrice = 18.00;
            totalPrice = numOfDay * roomPrice;
        break;
        case "apartment":
            roomPrice = 25.00;
            totalPrice = numOfDay * roomPrice;
            if (numOfDay < 10) {
                totalPrice *= 0.70;
            } else if (numOfDay >= 10 && numOfDay < 15) {
                totalPrice *= 0.65;
            } else if (numOfDay >= 15) {
                totalPrice *= 0.50;
            }
        break;
        case "president apartment":
            roomPrice = 35.00;
            totalPrice = numOfDay * roomPrice;
            if (numOfDay < 10) {
                totalPrice *= 0.90;
            } else if (numOfDay >= 10 && numOfDay < 15) {
                totalPrice *= 0.85;
            } else if (numOfDay >= 15) {
                totalPrice *= 0.80;
            }
        break;
    }
    if (rating == "positive") {
        totalPrice *= 1.25;
    } else if (rating == "negative") {
        totalPrice *= 0.90;
    }
    console.log(totalPrice.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"])

