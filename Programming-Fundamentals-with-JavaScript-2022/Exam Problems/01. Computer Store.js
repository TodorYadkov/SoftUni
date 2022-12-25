function computerStore(arr) {
    const taxes = 1.20;
    const specialDiscount = 0.90;
    let totalPrice = 0;
    let workArr = [];
    let isSpecial = false;
    if (arr.includes('special')) {
        workArr = arr.slice(0, arr.indexOf('special'));
        isSpecial = true;
    } else if (arr.includes('regular')) {
        workArr = arr.slice(0, arr.indexOf('regular'));
    }
    workArr.map(x => Number(x)).forEach(el => {
        if (el < 0) {
            console.log('Invalid price!');
        } else {
            totalPrice += el;
        }
    });
    if (totalPrice === 0) {
        console.log('Invalid order!');
    } else {
        if (isSpecial) {
            console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${totalPrice.toFixed(2)}$\nTaxes: ${((totalPrice * taxes) - totalPrice).toFixed(2)}$\n-----------\nTotal price: ${((totalPrice * taxes) * specialDiscount).toFixed(2)}$`);

        } else {
            console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${totalPrice.toFixed(2)}$\nTaxes: ${((totalPrice * taxes) - totalPrice).toFixed(2)}$\n-----------\nTotal price: ${(totalPrice * taxes).toFixed(2)}$`);
        }
    }
}

// computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special', '450']);
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular', '450']);
// computerStore(['0','special' ,'44']);