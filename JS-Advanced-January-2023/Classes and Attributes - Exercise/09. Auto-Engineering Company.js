function autoEngineeringCompny(input) {
    const carList = {};

    for (let line of input) {
        const [brand, car, produced] = line.split(' | ');
        
        if (carList[brand] === undefined) {
            carList[brand] = {};
        };

        if (carList[brand][car] === undefined) {
            carList[brand][car] = 0;
        };

        carList[brand][car] += Number(produced);
    };

    Object.keys(carList).forEach(brand => {
        console.log(brand);
        Object.entries(carList[brand]).forEach(car => console.log(`###${car[0]} -> ${car[1]}`));
    });
}

autoEngineeringCompny(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);