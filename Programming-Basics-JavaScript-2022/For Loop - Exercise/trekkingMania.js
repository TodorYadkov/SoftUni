function trekkingMania(input) {
    let numberGroup = Number(input[0]);
    let peopleInGroup = 0;
    let percentMusala = 0;
    let percentMonblan = 0;
    let percentkilimandjaro = 0;
    let percentK2 = 0;
    let percentEverest = 0;
    let allPeople = 0;

    for (let i = 1; i <= numberGroup; i++) {
        let countPeople = Number(input[i]);
        allPeople += countPeople;
        for (let a = 1; a <= countPeople; a++) {
        if (countPeople < 6) {
            percentMusala ++;
        } else if (countPeople >= 6 && countPeople < 13) {
            percentMonblan ++;
        } else if (countPeople >= 13 && countPeople < 26) {
            percentkilimandjaro ++;
        } else if (countPeople >= 26 && countPeople < 41) {
            percentK2 ++;
        } else if (countPeople >= 41) {
            percentEverest ++;
        }
        }
    }
    percentMusala = (percentMusala / allPeople) * 100;
    percentMonblan = (percentMonblan / allPeople) * 100;
    percentkilimandjaro = (percentkilimandjaro / allPeople) * 100;
    percentK2 = (percentK2 / allPeople) * 100;
    percentEverest = (percentEverest / allPeople) * 100;
    
    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMonblan.toFixed(2)}%`);
    console.log(`${percentkilimandjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

