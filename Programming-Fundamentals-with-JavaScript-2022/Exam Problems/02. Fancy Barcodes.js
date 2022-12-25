function fancyBarcode(input) {
    const patternBarcode = /(@)#{1,}([A-Z][A-Za-z0-9]{4,}[A-Z])\1#{1,}/g;
    const patternNumber = /\d+/g;
    let numberBarcode = Number(input.shift());

    for (let i = 0; i < numberBarcode; i++) {
        let currentBarcode = input.shift();
        let isValidBarcode = currentBarcode.match(patternBarcode);
        let productGroup = ['0', '0'];

        if (isValidBarcode !== null && isValidBarcode.length > 0) {
            if (patternNumber.test(currentBarcode)) {
                productGroup = currentBarcode.match(patternNumber);
            }
            console.log(`Product group: ${productGroup.join('')}`);
        } else {
            console.log('Invalid barcode');
        }
    }
}

// fancyBarcode(["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"]);

fancyBarcode(["6",
    "@###Val1d1teM@###",
    "@#V0a1l2i3d4I5t6e7M@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);