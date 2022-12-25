function snooker(input) {
    let typeFinal = input[0];
    let typeTicket = input[1];
    let numTicket = Number(input[2]);
    let pictureTrophy = input[3];
    let picturePrice = 40;
    let totalPrice = 0;

    if (typeFinal == "Quarter final" && typeTicket == "Standard") {
        totalPrice = numTicket * 55.50;
        if (totalPrice > 2500 && totalPrice <= 4000) {
           totalPrice = totalPrice * 0.90;
           if (pictureTrophy == "Y") {
                totalPrice = totalPrice + (numTicket * picturePrice);
           } 
        } 
        if (totalPrice > 4000) {
            totalPrice = totalPrice * 0.75;
        }
    } else if (typeFinal == "Quarter final" && typeTicket == "Premium") {
        totalPrice = numTicket * 105.20;
        if (totalPrice > 2500 && totalPrice <= 4000) {
           totalPrice = totalPrice * 0.90;
           if (pictureTrophy == "Y") {
                totalPrice = totalPrice + (numTicket * picturePrice);
           } 
        } 
        if (totalPrice > 4000) {
            totalPrice = totalPrice * 0.75;
        }
        
    } else if (typeFinal == "Quarter final" && typeTicket == "VIP") {
        totalPrice = numTicket * 118.90;
        if (totalPrice > 2500 && totalPrice <= 4000) {
           totalPrice = totalPrice * 0.90;
           if (pictureTrophy == "Y") {
                totalPrice = totalPrice + (numTicket * picturePrice);
           } 
        } 
        if (totalPrice > 4000) {
            totalPrice = totalPrice * 0.75;
        }
        
    } else if (typeFinal == "Semi final" && typeTicket == "Standard") {
        totalPrice = numTicket * 75.88;
        if (totalPrice > 2500 && totalPrice <= 4000) {
           totalPrice = totalPrice * 0.90;
           if (pictureTrophy == "Y") {
                totalPrice = totalPrice + (numTicket * picturePrice);
           } 
        } 
        if (totalPrice > 4000) {
            totalPrice = totalPrice * 0.75;
        }
        
    } else if (typeFinal == "Semi final" && typeTicket == "Premium") {
        totalPrice = numTicket * 125.22;
        if (totalPrice > 2500 && totalPrice <= 4000) {
           totalPrice = totalPrice * 0.90;
           if (pictureTrophy == "Y") {
                totalPrice = totalPrice + (numTicket * picturePrice);
           } 
        } 
        if (totalPrice > 4000) {
            totalPrice = totalPrice * 0.75;
        }
        
    } else if (typeFinal == "Semi final" && typeTicket == "VIP") {
        totalPrice = numTicket * 300.40;
        if (totalPrice > 2500 && totalPrice <= 4000) {
           totalPrice = totalPrice * 0.90;
           if (pictureTrophy == "Y") {
                totalPrice = totalPrice + (numTicket * picturePrice);
            } 
        } 
        if (totalPrice > 4000) {
            totalPrice = totalPrice * 0.75;
        }
        
    } else if (typeFinal == "Final" && typeTicket == "Standard") {
        totalPrice = numTicket * 110.10;
        if (totalPrice > 2500 && totalPrice <= 4000) {
           totalPrice = totalPrice * 0.90;
           if (pictureTrophy == "Y") {
                totalPrice = totalPrice + (numTicket * picturePrice);
           } 
        } 
        if (totalPrice > 4000) {
            totalPrice = totalPrice * 0.75;
        }
        
    } else if (typeFinal == "Final" && typeTicket == "Premium") {
        totalPrice = numTicket * 160.66;
        if (totalPrice > 2500 && totalPrice <= 4000) {
           totalPrice = totalPrice * 0.90;
           if (pictureTrophy == "Y") {
                totalPrice = totalPrice + (numTicket * picturePrice);
           } 
        } 
        if (totalPrice > 4000) {
            totalPrice = totalPrice * 0.75;
        }
        
    } else if (typeFinal == "Final" && typeTicket == "VIP") {
        totalPrice = numTicket * 400.00;
        if (totalPrice > 2500 && totalPrice <= 4000) {
           totalPrice = totalPrice * 0.90;
           if (pictureTrophy == "Y") {
                totalPrice = totalPrice + (numTicket * picturePrice);
           } 
        } 
        if (totalPrice > 4000) {
            totalPrice = totalPrice * 0.75;
        }
        
    }

    console.log(totalPrice.toFixed(2));
}
snooker(["Quarter final","Standard",11,"N"])