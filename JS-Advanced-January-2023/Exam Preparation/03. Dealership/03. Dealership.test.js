const { dealership } = require('./03. Dealership');
const { assert } = require('chai');

describe('Test dealership object', () => {
    let testObj;
    beforeEach(() => testObj = dealership);
    describe('Test method newCarCost', () => {
        it('Test 1: Should return a price of the new car with discount', () => {
            assert.equal(testObj.newCarCost('Audi A4 B8', 25000), 10000);
        });
        it('Test 2: Should return a price of the new car with discount', () => {
            assert.equal(testObj.newCarCost('Audi A6 4K', 30000), 10000);
        });
        it('Test 3: Should return a price of the new car with discount', () => {
            assert.equal(testObj.newCarCost('Audi A8 D5', 35000), 10000);
        });
        it('Test 4: Should return a price of the new car with discount', () => {
            assert.equal(testObj.newCarCost('Audi TT 8J', 24000), 10000);
        });
        it('Test 5: Should return a price of the new car without discount', () => {
            assert.equal(testObj.newCarCost('Audi TT', 20000), 20000);
        });

    });
    describe('Test method carEquipment', () => {
        it('Test 1: Should return correct new array', () => {
            assert.deepEqual(testObj.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 1, 2, 3]), ['heated seats', 'sliding roof', 'sport rims', 'navigation']);
        });
        it('Test 2: Should return correct new array', () => {
            assert.deepEqual(testObj.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [1, 2, 3]), ['sliding roof', 'sport rims', 'navigation']);
        });
        it('Test 3: Should return correct new array', () => {
            assert.deepEqual(testObj.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [2, 3]), ['sport rims', 'navigation']);
        });
        it('Test 4: Should return correct new array', () => {
            assert.deepEqual(testObj.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [3]), ['navigation']);
        });
        it('Test 5: Should return correct new array', () => {
            assert.deepEqual(testObj.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], []), []);
        });
        it('Test 6: Should return correct new array', () => {
            assert.deepEqual(testObj.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [100]), [undefined]);
        });
    });
    describe('Test method euroCategory', () => {
        it('Test 1: Should return correct string', () => {
            assert.equal(testObj.euroCategory(4), 'We have added 5% discount to the final price: 14250.');
        });
        it('Test 2: Should return correct string', () => {
            assert.equal(testObj.euroCategory(6), 'We have added 5% discount to the final price: 14250.');
        });
        it('Test 3: Should return correct string', () => {
            assert.equal(testObj.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!');
        });
        it('Test 4: Should return correct string', () => {
            assert.equal(testObj.euroCategory(1), 'Your euro category is low, so there is no discount from the final price!');
        });
    });
});