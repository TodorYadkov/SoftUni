function cinema(input) {
    let index = 0;
    let numberPlace = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let totalIncome = 0;
    while (command !== "Movie time!") {
        command = Number(command);
        let currBill = 0;
        if (command <= numberPlace) {
            numberPlace -= command;
        } else {
            console.log("The cinema is full.");
            break;
        }
        if (command % 3 === 0) {
            currBill = (command * 5) - 5.00;
        } else {
            currBill = command * 5.00;
        }
        totalIncome += currBill;
        command = input[index];
        index++;
        if (command === "Movie time!") {
            console.log(`There are ${numberPlace} seats left in the cinema.`);
            break;
        }
    }
    console.log(`Cinema income - ${totalIncome} lv.`);
}
cinema(["100",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"Movie time!"])