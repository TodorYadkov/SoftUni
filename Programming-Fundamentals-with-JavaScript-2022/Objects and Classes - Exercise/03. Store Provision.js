function store(currentStock, orderedStock) {
    let quantityOfStock = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        let currentProduct = currentStock[i];
        let currentQuantity = Number(currentStock[i + 1]);
        quantityOfStock[currentProduct] = currentQuantity;
    }
    for (let i = 0; i < orderedStock.length; i += 2) {
        let currentProduct = orderedStock[i];
        let currentQuantity = Number(orderedStock[i + 1]);
        if (quantityOfStock.hasOwnProperty(currentProduct)) {
           let cureentSum = Number(quantityOfStock[currentProduct] + currentQuantity);
           quantityOfStock[currentProduct] = cureentSum;
        } else {
            quantityOfStock[currentProduct] = currentQuantity;
        }
    }
    for (let key in quantityOfStock) {
        console.log(`${key} -> ${quantityOfStock[key]}`);
    }
}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
store([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);