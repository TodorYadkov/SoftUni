function filmPremier(input) {
    let movieName = input[0];
    let packet = input[1];
    let numTickets = Number(input[2]);
    let cost = 0;
    switch (movieName) {
        case "John Wick":
            if (packet === "Drink") {
                cost = 12.00;
            } else if (packet === "Popcorn") {
                cost = 15.00;
            } else if (packet === "Menu") {
                cost = 19.00;
            }
            break;
        case "Star Wars":
            if (packet === "Drink") {
                cost = 18.00;
            } else if (packet === "Popcorn") {
                cost = 25.00;
            } else if (packet === "Menu") {
                cost = 30.00;
            }
            break;
        case "Jumanji":
            if (packet === "Drink") {
                cost = 9.00;
            } else if (packet === "Popcorn") {
                cost = 11.00;
            } else if (packet === "Menu") {
                cost = 14.00;
            }
            break;
    }
    cost = cost * numTickets;
    if (movieName === "Star Wars" && numTickets >= 4) {
        cost *= 0.70;
    } else if (movieName === "Jumanji" && numTickets === 2) {
        cost *= 0.85;
    }
    console.log(`Your bill is ${cost.toFixed(2)} leva.`);
}
filmPremier(["Jumanji",
"Menu",
"2"])