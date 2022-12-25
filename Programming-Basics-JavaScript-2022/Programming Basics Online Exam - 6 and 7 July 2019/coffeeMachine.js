function coffeeMachine(input) {
    let typeDrink = input[0];
    let typeSugar = input[1];
    let numDrink = Number(input[2]);
    let totalPrice = 0;

    if (typeDrink === "Espresso") {
        if (typeSugar === "Without") {
            totalPrice = numDrink * 0.90;
        } else if (typeSugar === "Normal") {
            totalPrice = numDrink * 1.00;
        } else if (typeSugar === "Extra") {
            totalPrice = numDrink * 1.20;
        }
    } else if (typeDrink === "Cappuccino") {
        if (typeSugar === "Without") {
            totalPrice = numDrink * 1.00;
        } else if (typeSugar === "Normal") {
            totalPrice = numDrink * 1.20;
        } else if (typeSugar === "Extra") {
            totalPrice = numDrink * 1.60;
        }
    } else if (typeDrink === "Tea") {
        if (typeSugar === "Without") {
            totalPrice = numDrink * 0.50;
        } else if (typeSugar === "Normal") {
            totalPrice = numDrink * 0.60;
        } else if (typeSugar === "Extra") {
            totalPrice = numDrink * 0.70;
        }
    }
    if (typeSugar === "Without") {
        totalPrice -= totalPrice * 0.35;
    }
    if (typeDrink === "Espresso" && numDrink >= 5) {
        totalPrice -= totalPrice * 0.25;
    }
    if (totalPrice > 15.00) {
        totalPrice -= totalPrice * 0.20;
    }
    console.log(`You bought ${numDrink} cups of ${typeDrink} for ${totalPrice.toFixed(2)} lv.`);
}
coffeeMachine(["Cappuccino",
"Normal",
"13"])