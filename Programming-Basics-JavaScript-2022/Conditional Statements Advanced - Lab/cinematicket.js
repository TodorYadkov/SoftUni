function cinemaTicket(input) {
    let day = input[0];
    let priceTicket = 0;

    switch (day) {
        case "Monday":
                priceTicket = 12;
        break;
        case "Tuesday":
                priceTicket = 12;
        break;
        case "Wednesday":
                priceTicket = 14;
        break;
        case "Thursday":
                priceTicket = 14;
        break;
        case "Friday":
                priceTicket = 12;
        break;
        case "Saturday":
                priceTicket = 16;
        break;
        case "Sunday":
                priceTicket = 16;
        break;
    }
    console.log(priceTicket);
}
cinemaTicket(["Monday"])