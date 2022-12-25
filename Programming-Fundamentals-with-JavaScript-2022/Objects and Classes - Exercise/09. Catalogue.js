function catalogue(input) {
    let catalogueOfProducts = {};
    input.sort((a, b) => a.localeCompare(b));
    for (let el of input) {
        let tempArr = el.split(' : ');
        catalogueOfProducts[tempArr[0]] = Number(tempArr[1]);
    }

    let previousValues = input[0].charCodeAt(0);
    console.log(String.fromCharCode(previousValues));
    
    for (let prop of Object.keys(catalogueOfProducts)) {
        if (previousValues !== prop.charCodeAt(0)) {
            let currentCharValues = prop.charCodeAt(0);
            console.log(String.fromCharCode(currentCharValues));
            console.log(`  ${prop}: ${catalogueOfProducts[prop]}`);
        } else {
            console.log(`  ${prop}: ${catalogueOfProducts[prop]}`);

        }
        previousValues = prop.charCodeAt(0);
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59']);