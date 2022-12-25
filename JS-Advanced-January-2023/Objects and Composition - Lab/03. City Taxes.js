function cityTaxes(name, population, treasury) {
    let result = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percent) {
            percent = Number(percent / 100) + 1;
            this.population = Math.floor(this.population * percent);
        },
        applyRecession(percent) {
            percent = 1 - Number(percent / 100);
            this.treasury = Math.floor(this.treasury * percent);
        }
    };

    return result;
}


const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
