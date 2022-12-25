function journey(input) {
    let budget = Number(input[0]);
    let seasons = input[1];

    if (budget <= 100 ) {
        if (seasons == "summer") {
            console.log(`Somewhere in Bulgaria`);
            console.log(`Camp - ${(budget * 0.30).toFixed(2)}`);
        } else {
            console.log(`Somewhere in Bulgaria`);
            console.log(`Hotel - ${(budget * 0.70).toFixed(2)}`);
        }
    } else if (budget <= 1000) {
        if (seasons == "summer") {
            console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${(budget * 0.40).toFixed(2)}`);
        } else {
            console.log(`Somewhere in Balkans`);
            console.log(`Hotel - ${(budget * 0.80).toFixed(2)}`);
        }  
    } else if (budget > 1000) {
        console.log(`Somewhere in Europe`);
        console.log(`Hotel - ${(budget * 0.90).toFixed(2)}`);
    }
}
journey(["75", "winter"])