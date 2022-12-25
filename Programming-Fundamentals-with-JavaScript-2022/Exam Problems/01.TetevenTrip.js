function tetevenTrip(inputArr) {
    const unit = {
        gas: 1.2,
        petrol: 1,
        diesel: 0.8,
        luggageWeightConsumation: 0.01,
        calculateConsumation(typeFuel) {
            return this[typeFuel] * 10;
        },
        calculateExtraConsumation(luggageWeight) {
            return Number(luggageWeight) * this.luggageWeightConsumation;
        },
    }

    for (let el of inputArr) {
        let [car, fuelType, routeNumber, luggageWeight] = el.split(' ');
        let consumationPer100Km = unit.calculateConsumation(fuelType) + unit.calculateExtraConsumation(luggageWeight);
        let totalConsumation = 0;
        let extraSnowConsumation = 0.3 * consumationPer100Km;

        if (routeNumber === '1') {

            totalConsumation = Math.round((110 * (consumationPer100Km / 100)) + (10 * (extraSnowConsumation / 100)));
        } else if (routeNumber === '2') {

            totalConsumation = Math.round((95 * (consumationPer100Km / 100)) + (30 * (extraSnowConsumation / 100)));
        }

        if (car) {
            console.log(`${car} ${fuelType} ${routeNumber} ${totalConsumation}`)
        }
    }
}

tetevenTrip(['BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54',
    '']);