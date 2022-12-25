function fruitShop(input) {
    let productName = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let cost = 0;
    let check = false;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
           switch (productName) {
               case "banana":
                    cost = quantity * 2.50;
                break;
                case "apple":
                    cost = quantity * 1.20;
                break;
                case "orange":
                    cost = quantity * 0.85;
                break;
                case "grapefruit":
                    cost = quantity * 1.45;
                break;
                case "kiwi":
                    cost = quantity * 2.70;
                break;
                case "pineapple":
                    cost = quantity * 5.50;
                break;
                case "grapes":
                    cost = quantity * 3.85;
                break;
            default:
                check = true;
            break;
           }
        break;
        case "Saturday":
        case "Sunday":
            switch (productName) {
                case "banana":
                     cost = quantity * 2.70;
                 break;
                 case "apple":
                     cost = quantity * 1.25;
                 break;
                 case "orange":
                     cost = quantity * 0.90;
                 break;
                 case "grapefruit":
                     cost = quantity * 1.60;
                 break;
                 case "kiwi":
                     cost = quantity * 3.00;
                 break;
                 case "pineapple":
                     cost = quantity * 5.60;
                 break;
                 case "grapes":
                     cost = quantity * 4.20;
                 break;
            default:
                check = true;
            break;
            }
        break;
        default:
            check = true;
        break;
    }
    if (check == true) {
        console.log("error");
    } else {
        console.log(cost.toFixed(2));
    }
}
fruitShop(["tomato","Monday","0.5"])





