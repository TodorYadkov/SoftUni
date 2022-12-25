function movieProfit(input) {
    let nameMovie = input[0];
    let day = Number(input[1]);
    let numTicket = Number(input[2]);
    let priceTicket = Number(input[3]);
    let percentCinema = Number(input[4]);
    let totalProfit = (numTicket * priceTicket) * day;
    percentCinema = (100 - percentCinema) / 100;
    percentCinema *= totalProfit;
    totalProfit = percentCinema;
    console.log(`The profit from the movie ${nameMovie} is ${totalProfit.toFixed(2)} lv.`);
}
movieProfit(["The Jungle",
"22",
"20500",
"9.37",
"30"])