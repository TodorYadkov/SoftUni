function newOrders(order,number) {
    orders(order,number);
function orders(product, quantity) {
    let sum = 0;
    switch (product) {
        case 'water':
            sum = quantity * 1.00;
            break;
        case 'coffee':
            sum = quantity * 1.50;
            break;
        case 'coke':
            sum = quantity * 1.40;
            break;
        case 'snacks':
            sum = quantity * 2.00;
            break;
    }
    console.log(sum.toFixed(2));
}
}
newOrders("water", 5);
newOrders("coffee", 2);