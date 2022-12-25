function townPopulation(arr) {
    let cityInfo = {};

    for (let el of arr) {
        let [town, population] = el.split(' <-> ');

        if (cityInfo.hasOwnProperty(town)) {
            cityInfo[town] += Number(population);
        } else {
            cityInfo[town] = Number(population);
        }
    }

    for (let prop in cityInfo) {
        console.log(`${prop} : ${cityInfo[prop]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);