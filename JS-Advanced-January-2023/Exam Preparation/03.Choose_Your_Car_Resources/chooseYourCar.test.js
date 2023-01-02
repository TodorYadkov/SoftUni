const { chooseYourCar } = require('./chooseYourCar');
const { assert } = require('chai');

describe('Test chooseYourCar object', () => {
    let testObj;
    beforeEach(() => testObj = chooseYourCar);
    describe('Test method choosingType', () => {
        it('Test 1: Should thrown an Error', () => {
            assert.throws(() => testObj.choosingType('Sedan', 'Red', 1899));
            assert.throws(() => testObj.choosingType('Sedan', 'Red', 2023));
            assert.throws(() => testObj.choosingType('correctTypeIsSedan', 'Red', 1900));
            assert.throws(() => testObj.choosingType('correctTypeIsSedan', 'Red', 2022));
        });

        it('Test 2: Should return correct string for right car', () => {
            assert.equal(testObj.choosingType('Sedan', 'Red', 2010), 'This Red Sedan meets the requirements, that you have.');
            assert.equal(testObj.choosingType('Sedan', 'Red', 2022), 'This Red Sedan meets the requirements, that you have.');
            assert.equal(testObj.choosingType('Sedan', 'Red', 1900), 'This Sedan is too old for you, especially with that Red color.');
            assert.equal(testObj.choosingType('Sedan', 'Red', 2009), 'This Sedan is too old for you, especially with that Red color.');
        });
    });

    describe('Test method brandName', () => {
        it('Test 1: Should thrown an Error with incorrect input', () => {
            assert.throws(() => testObj.brandName('mustBeArray', 0));
            assert.throws(() => testObj.brandName({}, 0));
            assert.throws(() => testObj.brandName(1, 0));
            assert.throws(() => testObj.brandName([], 'mustBeAIndexInRange'));
            assert.throws(() => testObj.brandName(['BMW'], 1));
            assert.throws(() => testObj.brandName([], []));
            assert.throws(() => testObj.brandName([], {}));
        });

        it('Test 2: Should return correct string with correct input', () => {
            assert.equal(testObj.brandName(['BMW', 'Toyota', 'Peugeot'], 0), 'Toyota, Peugeot');
            assert.equal(testObj.brandName(['BMW', 'Toyota', 'Peugeot'], 1), 'BMW, Peugeot');
            assert.equal(testObj.brandName(['BMW', 'Toyota', 'Peugeot'], 2), 'BMW, Toyota');
        });
    });

    describe('Test method carFuelConsumption', () => {
        it('Test 1: Should thrown an Error with incorrect input', () => {
            assert.throws(() => testObj.carFuelConsumption('mustBeAPositiveNumber', 'mustBeAPositiveNumber'));
            assert.throws(() => testObj.carFuelConsumption([], 1));
            assert.throws(() => testObj.carFuelConsumption({}, 1));
            assert.throws(() => testObj.carFuelConsumption(0, 1));
            assert.throws(() => testObj.carFuelConsumption(-1, 1));
            assert.throws(() => testObj.carFuelConsumption(1, []));
            assert.throws(() => testObj.carFuelConsumption(1, {}));
            assert.throws(() => testObj.carFuelConsumption(1, 0));
            assert.throws(() => testObj.carFuelConsumption(1, -1));
            assert.throws(() => testObj.carFuelConsumption(0, 0));
            assert.throws(() => testObj.carFuelConsumption(-1, -1));
        });

        it('Test 2: Should return correct string with correct input', () => {
            assert.equal(testObj.carFuelConsumption(100,7), 'The car is efficient enough, it burns 7.00 liters/100 km.');
            assert.equal(testObj.carFuelConsumption(67,4), 'The car is efficient enough, it burns 5.97 liters/100 km.');
            assert.equal(testObj.carFuelConsumption(67,4.3), 'The car is efficient enough, it burns 6.42 liters/100 km.');
            assert.equal(testObj.carFuelConsumption(100,7.1), 'The car burns too much fuel - 7.10 liters!');
            assert.equal(testObj.carFuelConsumption(67,7.1), 'The car burns too much fuel - 10.60 liters!');
            assert.equal(testObj.carFuelConsumption(67,10), 'The car burns too much fuel - 14.93 liters!');
        });
    });
});