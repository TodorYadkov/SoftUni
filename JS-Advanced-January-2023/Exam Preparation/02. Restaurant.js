class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let line of products) {
            let [productName, productQuantity, productTotalPrice] = line.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            let historyInfo = `There was not enough money to load ${productQuantity} ${productName}`;

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts[productName] === undefined) {
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += productQuantity;

                this.budgetMoney -= productTotalPrice;
                historyInfo = `Successfully loaded ${productQuantity} ${productName}`;
            }

            this.history.push(historyInfo);
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal]) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        const neededP = {};
        for (const el of neededProducts) {
            const [product, qty] = el.split(' ');
            neededP[product] = Number(qty);
        }

        if (this.menu[meal] === undefined) {
            this.menu[meal] = { price, neededProducts: neededP };
        }

        if (Object.keys(this.menu).length === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }

        const printLine = [];
        for (let meal in this.menu) {
            printLine.push(`${meal} - $ ${this.menu[meal].price}`);
        }

        return printLine.join('\n');
    }

    makeTheOrder(meal) {
        if (this.menu[meal] === undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let hasAllProducts = true;
        for (let product in this.menu[meal].neededProducts) {
            if (this.stockProducts.hasOwnProperty(product) === false ||
                this.stockProducts[product] < this.menu[meal].neededProducts[product]) {
                hasAllProducts = false;
                break;
            }
        }

        if (hasAllProducts === false) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        for (let product in this.menu[meal].neededProducts) {
            this.stockProducts[product] -= this.menu[meal].neededProducts[product];
        }

        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
/**
Successfully loaded 10 Banana
Successfully loaded 20 Banana
Successfully loaded 50 Strawberries
Successfully loaded 10 Yogurt
There was not enough money to load 500 Yogurt
Successfully loaded 5 Honey
 */

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// /**
// Great idea! Now with the frozenYogurt we have 1 meal in the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals in the menu, other ideas?
//  */

// let kitchen = new Restaurant(1000);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55);
// console.log(kitchen.showTheMenu());
// /**
// frozenYogurt - $ 9.99
// Pizza - $ 15.55
//  */

// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));
// // Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.

// let test = new Restaurant(1000);
// test.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']);
// // budgetMoney.to.equal(895);
// console.log(test.budgetMoney);