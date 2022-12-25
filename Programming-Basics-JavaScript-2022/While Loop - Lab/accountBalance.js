function accountBalance(input) {
    let command = true;
    let currentMoney = 0;
    let totalMoney = 0;
    let index = 0;

    while(command) {
        currentMoney = input[index];
        index ++;
        if (currentMoney <0) {
            console.log("Invalid operation!");
            command = false;
            break;
        }
        if (currentMoney === "NoMoreMoney") {
            command = false;
            break;
        }
        currentMoney = Number(currentMoney);
        console.log(`Increase: ${currentMoney.toFixed(2)}`);
        totalMoney += currentMoney;
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"])