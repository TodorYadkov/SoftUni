function storage(inputStock) {
    let stockList = new Map();
    inputStock = inputStock
        .map(el => el.split(' '))
        .forEach(el => {
            let [name, quantity] = el;
            quantity = Number(quantity);
            let qty = 0;
            if (stockList.has(name)) {
                qty = stockList.get(name);
            }
            stockList.set(name, quantity + qty);
        });
    for (let el of stockList) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
};
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);
