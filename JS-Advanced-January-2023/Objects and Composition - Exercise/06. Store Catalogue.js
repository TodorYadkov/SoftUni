function storeCatalogue(inputArr) {
    const listProduct = {};

    for (let el of inputArr) {
        let [product, price] = el.split(' : ');
        let letter = product[0];

        if (!listProduct.hasOwnProperty(letter)) {
            listProduct[letter] = {};
        }

        listProduct[letter][product] = Number(price);
    }

    let sortedLettersASC = Object.keys(listProduct).sort((a, b) => a.localeCompare(b));
    for (let letter of sortedLettersASC) {
        console.log(letter);

        let sortedProductsASC = Object.keys(listProduct[letter]).sort((a, b) => a.localeCompare(b));
        for (let product of sortedProductsASC) {
            console.log(`  ${product}: ${listProduct[letter][product]}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

storeCatalogue(['Banana : 2',
     'Rubic\'s Cube : 5',
     'Raspberry P : 4999',
     'Rolex : 100000',
     'Rollon : 10',
     'Rali Car : 2000000',
     'Pesho : 0.000001',
     'Barrel : 10']);
