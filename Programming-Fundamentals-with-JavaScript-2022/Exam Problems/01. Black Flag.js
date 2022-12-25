function blackFlag(input) {
    const daysOfThePlunder = Number(input[0]);
    const dailyPlunder = Number(input[1]);
    const targetPlunder = Number(input[2]);
    let totalPlunder = 0;

    for (let i = 1; i <= daysOfThePlunder; i++) {
        if (i % 3 === 0) {
            totalPlunder += dailyPlunder + (dailyPlunder * 0.50);
        } else {
            totalPlunder += dailyPlunder;
        }

        if (i % 5 === 0) {
            totalPlunder *= 0.70;
        }
    }

    if (totalPlunder >= targetPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (totalPlunder / targetPlunder) * 100;
       console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`); 
    }
}

// blackFlag(["5",
//     "40",
//     "100"]);

blackFlag(["10",
    "20",
    "380"]);