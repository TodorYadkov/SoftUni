const { rentCar } = require('./Rent Car');
const { assert } = require('chai');

describe('Test rentCar object', () => {
    let testObj;
    beforeEach(() => testObj = rentCar);
    describe('Test method searchCar', () => {
        it('Test 1: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(1, 'Volkswagen'));
        });
        it('Test 2: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(true, 'Volkswagen'));
        });
        it('Test 3: Should throw an error', () => {
            assert.throws(() => testObj.searchCar({}, 'Volkswagen'));
        });
        it('Test 4: Should throw an error', () => {
            assert.throws(() => testObj.searchCar('Volkswagen', 'Volkswagen'));
        });
        it('Test 5: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(null, 'Volkswagen'));
        });
        it('Test 6: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(undefined, 'Volkswagen'));
        });
        it('Test 7: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(['Volkswagen'], true));
        });
        it('Test 8: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(['Volkswagen'], 1));
        });
        it('Test 9: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(['Volkswagen'], {}));
        });
        it('Test 10: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(['Volkswagen'], []));
        });
        it('Test 11: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(['Volkswagen'], null));
        });
        it('Test 12: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(['Volkswagen'], undefined));
        });
        it('Test 13: Should throw an error', () => {
            assert.throws(() => testObj.searchCar([], undefined));
        });
        it('Test 14: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(1, 1));
        });
        it('Test 15: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(true, true));
        });
        it('Test 16: Should throw an error', () => {
            assert.throws(() => testObj.searchCar('Volkswagen', 'Volkswagen'));
        });
        it('Test 17: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(null, null));
        });
        it('Test 18: Should throw an error', () => {
            assert.throws(() => testObj.searchCar([], []));
        });
        it('Test 19: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(['Volkswagen', 'Audi'], 'Mercedes'));
        });
        it('Test 20: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(['1', '1'], 'BMW'));
        });
        it('Test 21: Should throw an error', () => {
            assert.throws(() => testObj.searchCar([1, 1], 'BMW'));
        });
        it('Test 22: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(['Volkswagen', 'Audi', 'BMW'], 'Mercedes'));
        });
        it('Test 23: Should throw an error', () => {
            assert.throws(() => testObj.searchCar([], 'Mercedes'));
        });
        it('Test 24: Should throw an error', () => {
            assert.throws(() => testObj.searchCar([null, null, null], 'Mercedes'));
        });
        it('Test 25: Should throw an error', () => {
            assert.throws(() => testObj.searchCar(['Volkswagen', 'Audi', 'BMW'], 'Mercedes'));
        });
        it('Test 26: Should return correct result ', () => {
            assert.equal(rentCar.searchCar(['Volkswagen', 'Audi', 'Volkswagen'], 'Audi'), 'There is 1 car of model Audi in the catalog!');
        });
        it('Test 27: Should return correct result ', () => {
            assert.equal(rentCar.searchCar(['BMW', 'Audi', 'BMW'], 'BMW'), 'There is 2 car of model BMW in the catalog!');
        });
        it('Test 28: Should return correct result ', () => {
            assert.equal(rentCar.searchCar(['BMW', 'BMW', 'BMW', 'Volkswagen'], 'BMW'), 'There is 3 car of model BMW in the catalog!');
        });
    });

    describe('Test method calculatePriceOfCar', () => {
        it('Test 1: Should throw an error', () => {
            assert.throws(() => testObj.calculatePriceOfCar(1, 'a'));
        });
        it('Test 2: Should throw an error', () => {
            assert.throws(() => testObj.calculatePriceOfCar(null, null));
        });
        it('Test 3: Should throw an error', () => {
            assert.throws(() => testObj.calculatePriceOfCar('a', true));
        });
        it('Test 4: Should throw an error', () => {
            assert.throws(() => testObj.calculatePriceOfCar('a', null));
        });
        it('Test 5: Should throw an error', () => {
            assert.throws(() => testObj.calculatePriceOfCar(1, 1));
        });
        it('Test 6: Should throw an error', () => {
            assert.throws(() => testObj.calculatePriceOfCar(true, 1));
        });
        it('Test 7: Should throw an error', () => {
            assert.throws(() => testObj.calculatePriceOfCar('a', -1));
        });
        it('Test 8: Should throw an error', () => {
            assert.throws(() => testObj.calculatePriceOfCar('Volkswagen', 1.001));
        });
        it('Test 9: Should throw an error', () => {
            assert.throws(() => testObj.calculatePriceOfCar('Volkswagen', 1.1));
        });
        it('Test 10: Should throw an error', () => {
            assert.throws(() => testObj.calculatePriceOfCar('Volkswagen', 0.001));
        });
        it('Test 11: Should return correct result ', () => {
            assert.equal(rentCar.calculatePriceOfCar('Audi', 1), 'You choose Audi and it will cost $36!');
        });
        it('Test 12: Should return correct result ', () => {
            assert.equal(rentCar.calculatePriceOfCar('Toyota', 3), 'You choose Toyota and it will cost $120!');
        });
        it('Test 13: Should return correct result ', () => {
            assert.equal(rentCar.calculatePriceOfCar('Volkswagen', 2), 'You choose Volkswagen and it will cost $40!');
        });
        it('Test 14: Should return correct result ', () => {
            assert.equal(rentCar.calculatePriceOfCar('BMW', 5), 'You choose BMW and it will cost $225!');
        });
        it('Test 15: Should return correct result ', () => {
            assert.equal(rentCar.calculatePriceOfCar('Mercedes', 4), 'You choose Mercedes and it will cost $200!');
        });
    });

    describe('Test method checkBudget', () => {
        it('Test 1: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget(1, 'a', 'a'));
        });
        it('Test 2: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget(1, 1, 'a'));
        });
        it('Test 3: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget('a', 'a', 'a'));
        });
        it('Test 4: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget('a', 1, 1));
        });
        it('Test 5: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget('a', 1, 'a'));
        });
        it('Test 6: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget(1, 'a', 1));
        });
        it('Test 7: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget(1.1, 'a', 'a'));
        });
        it('Test 8: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget(1.1, 1.1, 'a'));
        });
        it('Test 9: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget('a', 'a', 1.1));
        });
        it('Test 10: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget('a', 1.1, 1.1));
        });
        it('Test 11: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget('a', 1.1, 'a'));
        });
        it('Test 12: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget(1.1, 'a', 1.1));
        });
        it('Test 13: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget(-1, 'a', 'a'));
        });
        it('Test 14: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget(-1, -1, 'a'));
        });
        it('Test 15: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget('a', 'a', -1));
        });
        it('Test 16: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget('a', -1, -1));
        });
        it('Test 17: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget('a', -1, 'a'));
        });
        it('Test 18: Should throw an error', () => {
            assert.throws(() => testObj.checkBudget(-1, 'a', -1));
        });
        it('Test 19: Should return correct result ', () => {
            assert.equal(rentCar.checkBudget(2, 1, 1), 'You need a bigger budget!');
        });
        it('Test 20: Should return correct result ', () => {
            assert.equal(rentCar.checkBudget(1, 2, 1), 'You need a bigger budget!');
        });
        it('Test 21: Should return correct result ', () => {
            assert.equal(rentCar.checkBudget(5, 1, 1), 'You need a bigger budget!');
        });
        it('Test 22: Should return correct result ', () => {
            assert.equal(rentCar.checkBudget(1, 5, 1), 'You need a bigger budget!');
        });
        it('Test 23: Should return correct result ', () => {
            assert.equal(rentCar.checkBudget(1, 1, 1), 'You rent a car!');
        });
        it('Test 24: Should return correct result ', () => {
            assert.equal(rentCar.checkBudget(2, 5, 10), 'You rent a car!');
        });
        it('Test 25: Should return correct result ', () => {
            assert.equal(rentCar.checkBudget(2, 2, 5), 'You rent a car!');
        });
        it('Test 26: Should return correct result ', () => {
            assert.equal(rentCar.checkBudget(3, 3, 10), 'You rent a car!');
        });
    });
});