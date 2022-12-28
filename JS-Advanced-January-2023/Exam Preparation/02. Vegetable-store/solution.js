class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    const currentUniqueVegetables = new Set();

    while (vegetables.length > 0) {
      let [type, quantity, price] = vegetables.shift().split(' ');
      quantity = Number(quantity);
      price = Number(price);

      const productFound = this.availableProducts.find(p => p.type === type);
      if (productFound) {
        productFound.quantity += quantity;
        if (productFound.price < price) {
          productFound.price = price;
        }
      } else {
        this.availableProducts.push({
          type,
          quantity,
          price,
        });
      }

      currentUniqueVegetables.add(type);
    }

    return 'Successfully added ' + Array.from(currentUniqueVegetables.keys()).join(', ');
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;

    while (selectedProducts.length > 0) {
      let [type, quantity] = selectedProducts.shift().split(' ');
      quantity = Number(quantity);

      const wantedProduct = this.availableProducts.find(p => p.type === type);
      if (wantedProduct === undefined) {
        throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
      }

      if (quantity > wantedProduct.quantity) {
        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
      }

      wantedProduct.quantity -= quantity;
      totalPrice += wantedProduct.price * quantity;
    }

    return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
  }

  rottingVegetable(type, quantity) {
    quantity = Number(quantity);

    const wantedProduct = this.availableProducts.find(p => p.type === type);
    if (wantedProduct === undefined) {
      throw new Error(`${type} is not available in the store.`);
    }

    if (quantity > wantedProduct.quantity) {
      wantedProduct.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    }

    wantedProduct.quantity -= quantity;
    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    let productsList = [];
    this.availableProducts.sort((a, b) => a.price - b.price).forEach(p => productsList.push(`${p.type}-${p.quantity}-$${p.price}`));

    return [
      'Available vegetables:',
      productsList.join('\n'),
      `The owner of the store is ${this.owner}, and the location is ${this.location}.`
    ].join('\n');
  }
}

let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
console.log(vegStore.loadingVegetables(['Okra 2.5 3.5', 'Beans 10 2.8', 'Celery 5.5 2.2', 'Celery 0.5 2.5'])); // Successfully added Okra, Beans, Celery

// // New example
// let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
// console.log(vegStore.loadingVegetables(['Okra 2.5 3.5', 'Beans 10 2.8', 'Celery 5.5 2.2', 'Celery 0.5 2.5'])); // Successfully added Okra, Beans, Celery
// console.log(vegStore.buyingVegetables(['Okra 1'])); // Great choice! You must pay the following amount $3.50.
// console.log(vegStore.buyingVegetables(['Beans 8', 'Okra 1.5'])); // Great choice! You must pay the following amount $27.65.
// console.log(vegStore.buyingVegetables(['Banana 1', 'Beans 2'])); // Uncaught Error: Banana is not available in the store, your current bill is $0.00.

// // New example
// let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
// console.log(vegStore.loadingVegetables(['Okra 2.5 3.5', 'Beans 10 2.8', 'Celery 5.5 2.2', 'Celery 0.5 2.5'])); // Successfully added Okra, Beans, Celery
// console.log(vegStore.rottingVegetable('Okra', 1));   // Some quantity of the Okra has been removed.
// console.log(vegStore.rottingVegetable('Okra', 2.5)); // The entire quantity of the Okra has been removed.
// console.log(vegStore.buyingVegetables(['Beans 8', 'Okra 1.5'])); // Uncaught Error: The quantity 1.5 for the vegetable Okra is not available in the store, your current bill is $22.40.

// // New example
// let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
// console.log(vegStore.loadingVegetables(['Okra 2.5 3.5', 'Beans 10 2.8', 'Celery 5.5 2.2', 'Celery 0.5 2.5'])); // Successfully added Okra, Beans, Celery
// console.log(vegStore.rottingVegetable('Okra', 1));   // Some quantity of the Okra has been removed.
// console.log(vegStore.rottingVegetable('Okra', 2.5)); // The entire quantity of the Okra has been removed.
// console.log(vegStore.buyingVegetables(['Beans 8', 'Celery 1.5'])); // Great choice! You must pay the following amount $26.15.
// console.log(vegStore.revision()); // Available vegetables:
//                                   // Celery-4.5-$2.5
//                                   // Beans-2-$2.8
//                                   // Okra-0-$3.5
//                                   // The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.










