function shop(input) {
    let productName = input[0];
    let cityName = input[1];
    let quantity = Number(input[2]);
    let priceCoffee = 0;
    let priceWater = 0;
    let priceBeer = 0;
    let priceSweets = 0;
    let pricePeanuts = 0;
    let cost = 0;

    switch (cityName) {
        case "Sofia":
            switch (productName) {
                case "coffee":
                    priceCoffee = 0.50;
                    cost = quantity * priceCoffee;
                break;
                case "water":
                    priceWater = 0.80;
                    cost = quantity * priceWater;
            break;
                case "beer":
                    priceBeer = 1.20;
                    cost = quantity * priceBeer;
            break;
                case "sweets":
                    priceSweets = 1.45;
                    cost = quantity * priceSweets;
            break;
                case "peanuts":
                    pricePeanuts = 1.60;
                    cost = quantity * pricePeanuts;
            break;
            }   
        break;
        case "Plovdiv":
            switch (productName) {
                case "coffee":
                    priceCoffee = 0.40;
                    cost = quantity * priceCoffee;
                break;
                case "water":
                    priceWater = 0.70;
                    cost = quantity * priceWater;
                break;
                case "beer":
                    priceBeer = 1.15;
                    cost = quantity * priceBeer;
                break;
                case "sweets":
                    priceSweets = 1.30;
                    cost = quantity * priceSweets;
                break;
                case "peanuts":
                    pricePeanuts = 1.50;
                    cost = quantity * pricePeanuts;
                break;
                }
                break;   
            case "Varna":
                switch (productName) {
                case "coffee":
                    priceCoffee = 0.45;
                    cost = quantity * priceCoffee;
                break;
                case "water":
                    priceWater = 0.70;
                    cost = quantity * priceWater;
                break;
                case "beer":
                    priceBeer = 1.10;
                    cost = quantity * priceBeer;
                break;
                case "sweets":
                    priceSweets = 1.35;
                    cost = quantity * priceSweets;
                break;
                case "peanuts":
                    pricePeanuts = 1.55;
                    cost = quantity * pricePeanuts;
                break;
                }   
        break;
    }
    console.log(cost.toFixed(2));
}
shop(["peanuts","Plovdiv","1"])




