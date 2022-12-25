function coins(input) {
    let money = Number(input[0]);
    let countCoins = 0;
    let end = true;

    while (end) {
        money = money.toFixed(2);
        countCoins++;
        if (money >= 2) {
            money -= 2;
        } else if (money >= 1 && money < 2) {
            money -= 1;
        } else if (money >= 0.50 && money < 1) {
            money -= 0.50;
        } else if (money >= 0.20 && money < 0.50) {
            money -= 0.20;
        } else if (money >= 0.10 && money < 0.20) {
            money -= 0.10;
        } else if (money >= 0.05 && money < 0.10) {
            money -= 0.05;
        } else if (money >= 0.02 && money < 0.05) {
            money -= 0.02;
        } else if (money > 0 && money < 0.02) {
            money -= 0.01;
        }
        if (money <= 0) {
            end = false;
        }
    }
    console.log(countCoins)
}
coins(["0.56"])