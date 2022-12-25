function traveling(input) {
    let destinationName = input[0];
    let budget = Number(input[1]);
    let currentSum = 0;
    let indexDestination = 0;
    let indexBudget = 1;
    let indexSum = 2;
    let temporraySum = 0;

    while (destinationName !== "End") {
        destinationName = Number(destinationName);
        currentSum = 0;
        if (isNaN(destinationName)) {
            budget = Number(input[indexBudget]);
            destinationName = input[indexDestination];
            while (currentSum <= budget) {
                temporraySum = Number(input[indexSum]);
                currentSum += temporraySum;
                if (currentSum >= budget) {
                    console.log(`Going to ${destinationName}!`);
                }
                indexSum ++;
            }
        }
        indexSum = indexBudget + 2;
        indexDestination ++;
        indexBudget ++;
        destinationName = input[indexDestination];
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])