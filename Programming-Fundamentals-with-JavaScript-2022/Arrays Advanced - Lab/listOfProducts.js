function listOfProducts(productArray) {
    let count = 1;
         productArray
        .sort()
        .map((x) => console.log(`${count++}.${x}`));
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);