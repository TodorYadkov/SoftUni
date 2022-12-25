function newHouse(input) {
    let typeFlowers = input[0];
    let numFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;

    switch (typeFlowers) {
        case "Roses":
            if (numFlowers > 80) {
                totalPrice = numFlowers * 5;
                totalPrice = totalPrice * 0.90;
            } else {
                totalPrice = numFlowers * 5  
            }
        break;
        case "Dahlias":
            if (numFlowers > 90) {
                totalPrice = numFlowers * 3.80;
                totalPrice = totalPrice * 0.85;
            } else {
                totalPrice = numFlowers * 3.80;
            }
        break;
        case "Tulips":
            if (numFlowers > 80) {
                totalPrice = numFlowers * 2.80;
                totalPrice = totalPrice * 0.85;
            } else {
                totalPrice = numFlowers * 2.80;
            }
        break;
        case "Narcissus":
                if (numFlowers < 120) {
                    totalPrice = numFlowers * 3;
                    totalPrice = totalPrice * 1.15;
                } else {
                    totalPrice = numFlowers * 3;
                }
        break;
        case "Gladiolus":
                if (numFlowers < 80) {
                    totalPrice = numFlowers * 2.50;
                    totalPrice = totalPrice * 1.20;
                } else {
                    totalPrice = numFlowers * 2.50;
                }
        break;
    }
    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${typeFlowers} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
} 
newHouse(["Tulips","88","260"])

