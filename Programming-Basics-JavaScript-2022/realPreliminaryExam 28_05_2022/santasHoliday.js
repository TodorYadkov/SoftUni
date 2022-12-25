function santasHoliday(input) {
    let numDay = Number(input[0]);
    let typeRoom = input[1];
    let rating = input[2];
    let nights = numDay - 1;
    let price = 0;
    let sumAllNights = 0;
    let discount = 0;
    let isDiscount = false;
    switch (typeRoom) {
        case "room for one person":
            price = 18.00;
        break;
        case "apartment":
            price = 25;
            if (numDay < 10) {
                discount = 0.70;
                isDiscount = true;
            } else if (numDay < 15) {
                discount = 0.65;
                isDiscount = true;
            } else if (numDay >= 15) {
                discount = 0.50;
                isDiscount = true;
            }
        break;
        case "president apartment":
            price = 35.00;
            if (numDay < 10) {
                discount = 0.90;
                isDiscount = true;
            } else if (numDay < 15) {
                discount = 0.85;
                isDiscount = true;
            } else if (numDay >= 15) {
                discount = 0.80;
                isDiscount = true;
            }
        break;
    }
    sumAllNights = price * nights;
    if (isDiscount) {
        sumAllNights *= discount;
    }
    if (rating === "positive") {
        sumAllNights *= 1.25;
    } else if (rating === "negative") {
        sumAllNights *= 0.90;
    }
    console.log(sumAllNights.toFixed(2));
}
santasHoliday(["30","president apartment","negative"])