function godzila(input) {
    let budgetMovie = Number(input[0]);
    let peopleMovie = Number(input[1]);
    let priceClothsForOne = Number(input[2]);

    let priceDecor = budgetMovie * 0.10;
    let sumPriceCloths = peopleMovie * priceClothsForOne;
    
    if (peopleMovie > 150) {
        sumPriceCloths = sumPriceCloths - (sumPriceCloths * 0.10);
    } 
    
    let totalCost = priceDecor + sumPriceCloths;
    
    if (totalCost <= budgetMovie) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budgetMovie - totalCost).toFixed(2)} leva left`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost-budgetMovie).toFixed(2)} leva more.`);
    }
}
godzila(["9587.88","222","55.68"])


