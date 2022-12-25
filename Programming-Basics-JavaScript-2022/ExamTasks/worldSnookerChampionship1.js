function snooker(input) {
    let typeFinal = input[0];
    let typeTicket = input[1];
    let numTicket = Number(input[2]);
    let pictureTrophy = input[3];
    let picturePrice = 40;
    let totalPrice = 0;

    switch (typeFinal) {
        case ("Quarter final"):
            switch (typeTicket) {
                case ("Standard"):
                    totalPrice = numTicket * 55.50;                    
                    break;
                case ("Premium"):
                    totalPrice = numTicket * 105.20;
                    break;
                case ("VIP"):
                    totalPrice = numTicket * 118.90;
                    break;
            }
            break;
        case ("Semi final"):
            switch (typeTicket) {
                case ("Standard"):
                    totalPrice = numTicket * 75.88;
                    break;
                case ("Premium"):
                    totalPrice = numTicket * 125.22;
                    break;
                case ("VIP"):
                    totalPrice = numTicket * 300.40;
                    break;
            }
            break;
        case ("Final"):
            switch (typeTicket) {
                case ("Standard"):
                    totalPrice = numTicket * 110.10;
                    break;
                case ("Premium"):
                    totalPrice = numTicket * 160.66;
                    break;
                case ("VIP"):
                    totalPrice = numTicket * 400;
                    break;
            }
            break;
        break;
    }
    if (totalPrice > 4000) {
        totalPrice = (totalPrice * 0.75);
    } else if (totalPrice > 2500 && totalPrice <= 4000) {
        totalPrice = totalPrice * 0.90;
        if (pictureTrophy == "Y") {
             totalPrice = totalPrice + (numTicket * picturePrice);
        } 
    } else {
       if (pictureTrophy == "Y") {
        totalPrice = totalPrice + (numTicket * picturePrice);
        }
    }
     
     console.log(totalPrice.toFixed(2));
}
snooker(["Final","Premium",25,"Y"])