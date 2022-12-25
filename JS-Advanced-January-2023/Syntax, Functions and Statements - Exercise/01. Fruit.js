function fruit(strFruit, weightGrams, priceKg) {
    let weightKg = Number(weightGrams / 1000);
    priceKg = Number(priceKg);
    let totalCost = priceKg * weightKg;
    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${strFruit}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);