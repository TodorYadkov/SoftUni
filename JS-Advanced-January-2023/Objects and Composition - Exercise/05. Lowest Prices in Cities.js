function lowestPricesInCities(inputArr) {
    const listProducts = {};

    for (let line of inputArr) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (listProducts.hasOwnProperty(product) === false) {
            listProducts[product] = { town, price };
        } else {
            if (price < listProducts[product].price) {
                listProducts[product] = { town, price };
            }
        }
    }

    for (let prop in listProducts) {
        console.log(`${prop} -> ${listProducts[prop].price} (${listProducts[prop].town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);