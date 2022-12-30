class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error('Not enough space in the warehouse.');
        }

        this.products.push({
            product,
            quantity,
        });
        this.warehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const wantedProduct = this.products.find(p => p.product == product);

        if (wantedProduct === undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        if (minimalQuantity <= wantedProduct.quantity) {
            return `You have enough from product ${product}.`;
        } else {
            const difference = minimalQuantity - wantedProduct.quantity;
            wantedProduct.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        const wantedProduct = this.products.find(p => p.product == product);

        if (wantedProduct === undefined) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        wantedProduct.quantity--;
        this.sales.push({ product, quantity: 1 });
        return `The ${product} has been successfully sold.`;
    }

    revision() {

        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        }

        const summaryRevision = [`You sold ${this.sales.length} products today!`,'Products in the warehouse:'];
        this.products.forEach(p => summaryRevision.push(`${p.product}-${p.quantity} more left`));
        
        return summaryRevision.join('\n');
    }
}

const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore('headphones', 10, 200)); // The headphones has been successfully delivered in the warehouse. 
console.log(myOnlineShop.loadingStore('laptop', 5, 200));      // The laptop has been successfully delivered in the warehouse.
console.log(myOnlineShop.loadingStore('TV', 40, 500));         // Uncaught Error Error: Not enough space in the warehouse.

// const myOnlineShop = new OnlineShop(500);
// console.log(myOnlineShop.loadingStore('headphones', 10, 200)); // The headphones has been successfully delivered in the warehouse.
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));      // The laptop has been successfully delivered in the warehouse.
// console.log(myOnlineShop.quantityCheck('headphones', 10));     // You have enough from product headphones.
// console.log(myOnlineShop.quantityCheck('laptop', 10));         // You added 5 more from the laptop products.
// console.log(myOnlineShop.quantityCheck('TV', 40,));            // Uncaught Error Error: There is no TV in the warehouse.

// const myOnlineShop = new OnlineShop(500);
// console.log(myOnlineShop.loadingStore('headphones', 10, 200)); // The headphones has been successfully delivered in the warehouse.
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));      // The laptop has been successfully delivered in the warehouse.
// console.log(myOnlineShop.quantityCheck('headphones', 10));     // You have enough from product headphones.
// console.log(myOnlineShop.quantityCheck('laptop', 10));         // You added 5 more from the laptop products.
// console.log(myOnlineShop.sellProduct('headphones'));           // The headphones has been successfully sold.
// console.log(myOnlineShop.sellProduct('laptop'));               // The laptop has been successfully sold.
// console.log(myOnlineShop.sellProduct('keyboard'));             // Uncaught Error Error: There is no keyboard in the warehouse.

// const myOnlineShop = new OnlineShop(500);
// console.log(myOnlineShop.loadingStore('headphones', 10, 200)); // The headphones has been successfully delivered in the warehouse.
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));      // The laptop has been successfully delivered in the warehouse.
// console.log(myOnlineShop.quantityCheck('headphones', 10));     // You have enough from product headphones.
// console.log(myOnlineShop.quantityCheck('laptop', 10));         // You added 5 more from the laptop products.
// console.log(myOnlineShop.sellProduct('headphones'));           // The headphones has been successfully sold.
// console.log(myOnlineShop.sellProduct('laptop'));               // The laptop has been successfully sold.
// console.log(myOnlineShop.revision());                          // You sold 2 products today!
//                                                                // Products in the warehouse:
//                                                                // headphones-9 more left
//                                                                // laptop-9 more left
























