function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let freeSeat = Number(input[index]);
    index++;
    let countStudentTicket = 0;
    let countStandardTicket = 0;
    let countKidTicket = 0;
    let countAllticket = 0;
    
    while (command !== "Finish") {
        let usedSeat = 0;
        let currentMovie = command;
        command = input[index];
        index++;
        while (usedSeat <= freeSeat) {
            if (command === "End" || command === "Finish") {
                let percentUsedHall = (usedSeat / freeSeat) * 100;
                console.log(`${currentMovie} - ${percentUsedHall.toFixed(2)}% full.`);
                if (command !== "Finish") {
                command = input[index];
                index++;
                }
                break;
            }
            if (usedSeat >= freeSeat) {
                let percentUsedHall = (usedSeat / freeSeat) * 100;
                console.log(`${currentMovie} - ${percentUsedHall.toFixed(2)}% full.`);
                break;
            }
            switch (command) {
                case "student":
                    countStudentTicket++;
                break;
                case "standard":
                    countStandardTicket++;
                break;
                case "kid":
                    countKidTicket++;
                break;
            }
            command = input[index];
            index++;
            usedSeat++;
            countAllticket++;
        }
        freeSeat = Number(input[index]);
        index++; 
    }
    countStudentTicket = (countStudentTicket / countAllticket) * 100;
    countStandardTicket = (countStandardTicket / countAllticket) * 100;
    countKidTicket = (countKidTicket / countAllticket) * 100;
    console.log(`Total tickets: ${countAllticket}`);
    console.log(`${countStudentTicket.toFixed(2)}% student tickets.`);
    console.log(`${countStandardTicket.toFixed(2)}% standard tickets.`);
    console.log(`${countKidTicket.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Shutter Island","9","standard","standard","standard","student","student","student","kid","kid","kid","Rush","9","standard","standard","standard","student","student","student","kid","kid","kid","Deadpool","9","standard","standard","standard","student","student","student","kid","kid","kid","Finish"])
// (["The Matrix","20","student","standard","kid","kid","student","student","standard","student","End","The Green Mile","17","student","standard","standard","student","standard","student","End","Amadeus","3","standard","standard","standard","Finish"])
// (["Shutter Island","9","standard","standard","standard","student","student","student","kid","kid","kid","Rush","9","standard","standard","standard","student","student","student","kid","kid","kid","Deadpool","9","standard","standard","standard","student","student","student","kid","kid","kid","Finish"])