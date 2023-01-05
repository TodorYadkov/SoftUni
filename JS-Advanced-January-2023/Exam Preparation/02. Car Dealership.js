class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let indexOfCar = -1;
        const wantedCar = this.availableCars.find((car, index) => {
            if (car.model === model) {
                indexOfCar = index;
                return car;
            }
        });

        if (wantedCar === undefined) {
            throw new Error(`${model} was not found!`);
        }

        let soldPrice = 0;
        if (wantedCar.mileage <= desiredMileage) {
            soldPrice = wantedCar.price;
        } else if (wantedCar.mileage - desiredMileage <= 40000) {
            soldPrice = wantedCar.price * 0.95;
        } else if (wantedCar.mileage - desiredMileage > 40000) {
            soldPrice = wantedCar.price * 0.90;
        }

        this.totalIncome += soldPrice;
        this.availableCars.splice(indexOfCar, 1);
        this.soldCars.push({ model, horsepower: wantedCar.horsepower, soldPrice: soldPrice });

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return 'There are no available cars';
        }

        const printArr = [];
        this.availableCars.forEach(car => printArr.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`));

        return [
            '-Available cars:',
            printArr.join('\n')
        ].join('\n');
    }

    salesReport(criteria) {
        const sortType = criteria === 'horsepower' ? (a, b) => b.horsepower - a.horsepower : criteria === 'model' ? (a, b) => a.model.localeCompare(b.model) : undefined;
        if (sortType === undefined) {
            throw new Error('Invalid criteria!');
        }

        const printArr = [];
        this.soldCars.sort(sortType).forEach(car => printArr.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`));

        return [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`,
            printArr.join('\n')
        ].join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));    // New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));     // New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
console.log(dealership.addCar('', 120, 4900, 240000));                  // Uncaught Error Error: Invalid input!

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));  // Toyota Corolla was sold for 3500.00$
// console.log(dealership.sellCar('Mercedes C63', 110000));    // Mercedes C63 was sold for 26100.00$

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());   // -Available cars:
//                                         // ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
//                                         // ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
//                                         // ---Audi A3 - 120 HP - 240000.00 km - 4900.00$

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));  // -SoftAuto has a total income of 29600.00$
//                                                     // -2 cars sold:
//                                                     // ---Mercedes C63 - 300 HP - 26100.00$
//                                                     // ---Toyota Corolla - 100 HP - 3500.00$