function agencyProfit(input) {
    let nameCompany = input[0];
    let numTicketAdult = Number(input[1]);
    let numTicketChild = Number(input[2]);
    let priceTicketAdult = Number(input[3]);
    let serviceFee = Number(input[4]);
    let priceChildTicke = priceTicketAdult * 0.30;
    priceTicketAdult += serviceFee;
    priceChildTicke += serviceFee;
    let totalProfit = (priceChildTicke * numTicketChild) + 
                      (priceTicketAdult * numTicketAdult);
    let finalProfit =totalProfit * 0.20;
    console.log(`The profit of your agency from ${nameCompany} tickets is ${finalProfit.toFixed(2)} lv.`);

}
agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])