class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error('Not enough space in the garden.');
    }

    this.spaceAvailable -= spaceRequired;
    this.plants.push({
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    });

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    if (quantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }

    const plant = this.plants.find(p => p.plantName === plantName);
    if (plant === undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    plant.ripe = true;
    plant.quantity += quantity;

    if (quantity === 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    const plantIndex = this.plants.findIndex(p => p.plantName === plantName);
    if (plantIndex === -1) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    const plant = this.plants[plantIndex];
    if (plant.ripe === false) {
      throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
    }

    this.plants.splice(plantIndex, 1);
    this.storage.push({
      plantName,
      quantity: plant.quantity
    });

    this.spaceAvailable += plant.spaceRequired;

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    const plantsAsString = this.plants.map(p => p.plantName).sort((a, b) => a.localeCompare(b));
    const plantsRow = `Plants in the garden: ${plantsAsString.join(', ')}`;

    let storageRow = 'Plants in storage: The storage is empty.';
    if (this.storage.length > 0) {
      const storageAsString = this.storage.map(p => `${p.plantName} (${p.quantity})`);
      storageRow = `Plants in storage: ${storageAsString.join(', ')}`;
    }
    return [
      `The garden has ${this.spaceAvailable} free space left.`,
      plantsRow,
      storageRow,
    ].join('\n');
  }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant('apple', 20));    // The apple has been successfully planted in the garden.
console.log(myGarden.addPlant('orange', 200));  // The orange has been successfully planted in the garden.
console.log(myGarden.addPlant('olive', 50));    // Uncaught Error Error: Not enough space in the garden.

// // New example
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant('apple', 20));    // The apple has been successfully planted in the garden.
// console.log(myGarden.addPlant('orange', 100));  // The orange has been successfully planted in the garden.
// console.log(myGarden.addPlant('cucumber', 30)); // The cucumber has been successfully planted in the garden.
// console.log(myGarden.ripenPlant('apple', 10));  // 10 apples have successfully ripened.
// console.log(myGarden.ripenPlant('orange', 1));  // 1 orange has successfully ripened.
// console.log(myGarden.ripenPlant('orange', 4));  // Uncaught Error Error: The orange is already ripe.

// // New example
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant('apple', 20));    // The apple has been successfully planted in the garden.
// console.log(myGarden.addPlant('orange', 100));  // The orange has been successfully planted in the garden.
// console.log(myGarden.addPlant('cucumber', 30)); // The cucumber has been successfully planted in the garden.
// console.log(myGarden.ripenPlant('apple', 10));  // 10 apples have successfully ripened.
// console.log(myGarden.ripenPlant('orange', 1));  // 1 orange has successfully ripened.
// console.log(myGarden.ripenPlant('olive', 30));  // Uncaught Error Error: There is no olive in the garden.

// // New example
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));      // The apple has been successfully planted in the garden.
// console.log(myGarden.addPlant('orange', 100));    // The orange has been successfully planted in the garden.
// console.log(myGarden.addPlant('cucumber', 30));   // The cucumber has been successfully planted in the garden.
// console.log(myGarden.ripenPlant('apple', 10));    // 10 apples have successfully ripened.
// console.log(myGarden.ripenPlant('orange', 1));    // 1 orange has successfully ripened.
// console.log(myGarden.ripenPlant('cucumber', -5)); // Uncaught Error Error: The quantity cannot be zero or negative.

// // New example
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));      // The apple has been successfully planted in the garden.
// console.log(myGarden.addPlant('orange', 200));    // The orange has been successfully planted in the garden.
// console.log(myGarden.addPlant('raspberry', 10));  // The raspberry has been successfully planted in the garden.
// console.log(myGarden.ripenPlant('apple', 10));    // 10 apples have successfully ripened.
// console.log(myGarden.ripenPlant('orange', 1));    // 1 orange has successfully ripened.
// console.log(myGarden.harvestPlant('apple'));      // The apple has been successfully harvested.
// console.log(myGarden.harvestPlant('olive'));      // Uncaught Error Error: There is no olive in the garden.

// // New example
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));      // The apple has been successfully planted in the garden.
// console.log(myGarden.addPlant('orange', 200));    // The orange has been successfully planted in the garden.
// console.log(myGarden.addPlant('raspberry', 10));  // The raspberry has been successfully planted in the garden.
// console.log(myGarden.ripenPlant('apple', 10));    // 10 apples have successfully ripened.
// console.log(myGarden.ripenPlant('orange', 1));    // 1 orange has successfully ripened.
// console.log(myGarden.harvestPlant('apple'));      // The apple has been successfully harvested.
// console.log(myGarden.harvestPlant('raspberry'));  // Uncaught Error Error: The raspberry cannot be harvested before it is ripe.

// // New example
// const myGarden = new Garden(250);
// console.log(myGarden.addPlant('raspberry', 10));  // The raspberry has been successfully planted in the garden.
// console.log(myGarden.addPlant('apple', 20));      // The apple has been successfully planted in the garden.
// console.log(myGarden.addPlant('orange', 200));    // The orange has been successfully planted in the garden.
// console.log(myGarden.ripenPlant('apple', 10));    // 10 apples have successfully ripened.
// console.log(myGarden.ripenPlant('orange', 1));    // 1 orange has successfully ripened.
// console.log(myGarden.harvestPlant('orange'));     // The orange has been successfully harvested.
// console.log(myGarden.generateReport());           // The garden has 220 free space left.
//                                                   // Plants in the garden: apple, raspberry
//                                                   // Plants in storage: orange (1)






































