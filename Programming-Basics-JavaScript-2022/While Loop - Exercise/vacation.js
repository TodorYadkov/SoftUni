function vacation(input) {
    let vacationMoneyNeeded = Number(input[0]);
    let availableMoney = Number(input[1]);

    let indexOperation = 2;
    let typeOperation = input[indexOperation];
    let indexMoney = 3;
    let money = Number(input[indexMoney]);
    let countDaysSpend = 0;
    let countDaysAll = 0;

    while (vacationMoneyNeeded > availableMoney) {
        countDaysAll ++;
        typeOperation = input[indexOperation];
        money = Number(input[indexMoney]);
        if (typeOperation === "spend") {
            countDaysSpend ++;
            availableMoney -= money;
            if (money > availableMoney) {
               availableMoney = 0;
            }
            if (countDaysSpend === 5) {
                console.log("You can't save the money.");
                console.log(`${countDaysAll}`);
                break;
            }
        } else if (typeOperation === "save") {
            availableMoney += money;
            countDaysSpend = 0;   
        } else {
            break;
        }
        indexOperation += 2;
        indexMoney +=2;
    }
    if (availableMoney >= vacationMoneyNeeded) {
        console.log(`You saved the money for ${countDaysAll} days.`);
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])



























































// function vacation(input) {
//     let vacationMoneyNeeded = Number(input[0]);
//     let availableMoney = Number(input[1]);

//     let indexOperation = 2;
//     let typeOperation = input[indexOperation];
//     let indexMoney = 3;
//     let money = Number(input[indexMoney]);
//     let countDaysSpend = 0;
//     let countDaysAll = 0;

//     while (availableMoney < vacationMoneyNeeded) {
//         typeOperation = input[indexOperation];
//         money = Number(input[indexMoney]);
//         countDaysAll ++;
//         switch (typeOperation) {
//             case "spend":
//                 if (money > availableMoney) {
//                     availableMoney = 0;
//                 } else {
//                     availableMoney -= money;
//                 }
//                 countDaysSpend ++;
//             break;
//             case "save":
//                 availableMoney += money;
//                 countDaysSpend = 0;
//             break;
//         }
//         if (countDaysSpend === 5) {
//             console.log("You can't save the money.");
//             console.log(countDaysAll); 
//             break;
//         }
//         if (availableMoney >= vacationMoneyNeeded) {
//             console.log(`You saved the money for ${countDaysAll} days.`);
//             break;
//         }
//         indexMoney += 2;
//         indexOperation +=2;
//     }
// }
// vacation(["250",
// "150",
// "spend",
// "50",
// "spend",
// "50",
// "save",
// "100",
// "save",
// "100"])























  // while (sumMoney < vacationMoneyNeeded) {
    //     countDaysAll++;
    //     typeOperation = input[indexOperation];
    //     money = Number(input[indexMoney]);
    //     if (typeOperation === "spend") {
    //         if (money > sumMoney) {
    //             sumMoney = 0;
    //         } else {
    //             sumMoney -= money;
    //         }
    //         if (countDaysSpend === 5) {
    //             console.log("You can't save the money.");
    //             console.log(`${countDaysAll}`);
    //             break;
    //         }
    //         countDaysSpend ++;
    //     } else {
    //         sumMoney += money;
    //         countDaysSpend = 0;
    //     }
    //     indexOperation += 2;
    //     indexMoney += 2;
    //     lastOperation = typeOperation;
    // }
    // if (sumMoney >= vacationMoneyNeeded) {
    //     console.log(`You saved the money for ${countDaysAll} days.`);
    // }