function aluminumJoinery(input) {
    let numOrder = Number(input[0]);
    let typeJoinery = input[1];
    let typeOrder = input[2];
    let delivery = 60;
    let price = 0;
    if (numOrder < 10) {
        console.log("Invalid order");
    } else {
        switch (typeJoinery) {
            case "90X130":
                price = 110.00;
                if (numOrder >= 30 && numOrder <= 60) {
                    price *= 0.95;
                } else if (numOrder > 60) {
                    price *= 0.92;
                }
                break;
            case "100X150":
                price = 140.00;
                if (numOrder >= 40 && numOrder <= 80) {
                    price *= 0.94;
                } else if (numOrder > 80)  {
                    price *= 0.90;
                }
                break;
            case "130X180":
                price = 190.00;
                if (numOrder >= 20 && numOrder <= 50) {
                    price *= 0.93;
                } else  if (numOrder > 50) {
                    price *= 0.88;
                }
                break;
            case "200X300":
                price = 250.00;
                if (numOrder >= 25 && numOrder <= 50) {
                    price *= 0.91;
                } else  if (numOrder > 50) {
                    price *= 0.86;
                }
                break;
        }
        price *= numOrder;
        if (typeOrder === "With delivery") {
            price += 60;
        }
        if (numOrder >= 100) {
            price *= 0.96;
        }
        console.log(`${price.toFixed(2)} BGN`)
    }
}
aluminumJoinery(["105",
"100X150",
"With delivery"])