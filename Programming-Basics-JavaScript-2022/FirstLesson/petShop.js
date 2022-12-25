function petShop(input) {
    let dogFoodPrice = 2.50;
    let catFoodPrice = 4.00;
    let numDogFood = Number(input[0]);
    let numCatFood = Number(input[1]);
    let sum = (numDogFood * dogFoodPrice)+(numCatFood * catFoodPrice)
    console.log(`${sum} lv.`)
}
petShop([5,4])