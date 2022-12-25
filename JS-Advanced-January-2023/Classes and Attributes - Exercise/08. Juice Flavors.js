function juiceFlavors(input) {
    const juices = {};
    const bottles = {};

    for (let line of input) {
        const [juice, quantity] = line.split(' => ');

        if (juices[juice] === undefined) {
            juices[juice] = 0;
        };

        juices[juice] += Number(quantity);
        if (juices[juice] >= 1000) {
            const bottle = Math.trunc(juices[juice] / 1000);
            if (bottle > 0) {
                juices[juice] -= bottle * 1000;
            };

            if (bottles[juice] === undefined) {
                bottles[juice] = 0;
            };

            bottles[juice] += bottle;
        };
    };

    Object.entries(bottles).forEach(el => console.log(`${el[0]} => ${el[1]}`));
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

// juiceFlavors(['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//     'Pear => 5678',
//     'Watermelon => 6789']);