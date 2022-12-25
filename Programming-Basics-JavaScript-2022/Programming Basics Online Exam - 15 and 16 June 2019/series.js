function series(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let numSeries = Number(input[index]);
    index++;
    let totalCost = 0;
    for (let i = 0; i < numSeries; i++) {
        let nameSeries = input[index];
        index++;
        let priceSeries = Number(input[index]);
        index++;
        let currPrice = 0;
        switch (nameSeries) {
            case "Thrones":
                currPrice = priceSeries * 0.50;
                break;
            case "Lucifer":
                currPrice = priceSeries * 0.60;
                break;
            case "Protector":
                currPrice = priceSeries * 0.70;
                break;
            case "TotalDrama":
                currPrice = priceSeries * 0.80;
                break;
            case "Area":
                currPrice = priceSeries * 0.90;
                break;
            default:
                currPrice = priceSeries;
                break;
        }
        totalCost += currPrice;
    }
    let diff = Math.abs(budget - totalCost);
    if (budget >= totalCost) {
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
    }
} series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])