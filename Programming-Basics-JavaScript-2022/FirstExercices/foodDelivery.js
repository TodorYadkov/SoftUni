function delivery(input) {
    let chickenPrice = 10.35;
    let fishPrice = 12.40;
    let vegetarianPrice = 8.15;
    let deliveryPrice = 2.50;
    let numChicken = Number(input[0]);
    let numFish = Number(input[1]);
    let numVegetarian = Number(input[2]);

    let sumPriceWithoutDeliveryDessert = (numChicken*chickenPrice)+(numFish*fishPrice)+(numVegetarian*vegetarianPrice);
    let dessertPrice =sumPriceWithoutDeliveryDessert * 0.20;
    let sumTotalWithDelivery = sumPriceWithoutDeliveryDessert + dessertPrice + deliveryPrice;

    console.log(sumTotalWithDelivery);
}
delivery([2,4,3])