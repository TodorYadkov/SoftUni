function vacation(groupNumber, typeOfGroup, day) {
    let priceForOne = 0;
    let totalSum = 0;
    switch (typeOfGroup) {
        case "Students":
            switch (day) {
                case "Friday":
                    priceForOne = 8.45;
                    break;
                case "Saturday":
                    priceForOne = 9.80;
                    break;
                case "Sunday":
                    priceForOne = 10.46;
                    break;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    priceForOne = 10.90;
                    break;
                case "Saturday":
                    priceForOne = 15.60;
                    break;
                case "Sunday":
                    priceForOne = 16.00;
                    break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    priceForOne = 15.00;
                    break;
                case "Saturday":
                    priceForOne = 20.00;
                    break;
                case "Sunday":
                    priceForOne = 22.50;
                    break;
            }
            break;
    }
    if (typeOfGroup === "Business" && groupNumber >= 100) {
        groupNumber -= 10;
    }

    totalSum = groupNumber * priceForOne;
    
    if (typeOfGroup === "Students" && groupNumber >= 30) {
        totalSum *= 0.85;
    } else if (typeOfGroup === "Regular" && groupNumber >= 10 && groupNumber <= 20) {
        totalSum *= 0.95;
    } 
    console.log(`Total price: ${totalSum.toFixed(2)}`);
}
vacation(30,"Students","Sunday");