const { carService } = require('./03. Car Service');
const { assert } = require('chai');

describe('Test object carService', () => {
    let testObj;
    beforeEach(() => testObj = carService);
    describe('Test method isItExpensive', () => {
        it('Test 1: Should return correct string with attribute Engine', () => {
            assert.equal(testObj.isItExpensive('Engine'), 'The issue with the car is more severe and it will cost more money');
        });
        it('Test 2: Should return correct string with attribute Transmission', () => {
            assert.equal(testObj.isItExpensive('Transmission'), 'The issue with the car is more severe and it will cost more money');
        });
        it('Test 3: Should return correct string with attribute abc', () => {
            assert.equal(testObj.isItExpensive('abc'), 'The overall price will be a bit cheaper');
        });
    });

    describe('Test method discount', () => {
        it('Test 1: Should throw an error with incorrect input first argument is string', () => {
            assert.throws(() => testObj.discount('mustBeANumber', 0));
        });
        it('Test 2: Should throw an error with incorrect input first argument is array', () => {
            assert.throws(() => testObj.discount([], 0));
        });
        it('Test 3: Should throw an error with incorrect input first argument is object', () => {
            assert.throws(() => testObj.discount({}, 0));
        });
        it('Test 4: Should throw an error with incorrect input first argument is boolean', () => {
            assert.throws(() => testObj.discount(true, 0));
        });
        it('Test 5: Should throw an error with incorrect input second argument is string', () => {
            assert.throws(() => testObj.discount(0, 'mustBeANumber'));
        });
        it('Test 6: Should throw an error with incorrect input second argument is array', () => {
            assert.throws(() => testObj.discount(0, []));
        });
        it('Test 7: Should throw an error with incorrect input second argument is object', () => {
            assert.throws(() => testObj.discount(0, {}));
        });
        it('Test 8: Should throw an error with incorrect input second argument is boolean', () => {
            assert.throws(() => testObj.discount(0, true));
        });
        it('Test 9: Should throw an error with incorrect input all the arguments are wrong', () => {
            assert.throws(() => testObj.discount(true, true));
            assert.throws(() => testObj.discount([], []));
            assert.throws(() => testObj.discount({}, {}));
            assert.throws(() => testObj.discount('', ''));
        });
        it('Test 10: Should return correct string without discount when numberOfParts is 0', () => {
            assert.equal(testObj.discount(1, 1), 'You cannot apply a discount');
        });
        it('Test 11: Should return correct string without discount when numberOfParts is 2', () => {
            assert.equal(testObj.discount(1, 1), 'You cannot apply a discount');
        });
        it('Test 12: Should return correct string with discount 15% when numberOfParts is 3', () => {
            assert.equal(testObj.discount(3, 10), 'Discount applied! You saved 1.5$');
        });
        it('Test 13: Should return correct string with discount 15% when numberOfParts is 7', () => {
            assert.equal(testObj.discount(7, 10), 'Discount applied! You saved 1.5$');
        });
        it('Test 14: Should return correct string with discount 30% when numberOfParts is 8', () => {
            assert.equal(testObj.discount(8, 10), 'Discount applied! You saved 3$');
        });
        it('Test 15: Should return correct string with discount 30% when numberOfParts is 100', () => {
            assert.equal(testObj.discount(100, 10), 'Discount applied! You saved 3$');
        });
        it('Test 16: Should return correct string with discount 30% when numberOfParts is 1000', () => {
            assert.equal(testObj.discount(1000, 10), 'Discount applied! You saved 3$');
        });
    });

    describe('Test method partsToBuy', () => {
        it('Test 1: Should throw an error with incorrect input first argument is string', () => {
            assert.throws(() => testObj.partsToBuy('abc', []));
        });
        it('Test 2: Should throw an error with incorrect input first argument is object', () => {
            assert.throws(() => testObj.partsToBuy({}, []));
        });
        it('Test 3: Should throw an error with incorrect input first argument is boolean', () => {
            assert.throws(() => testObj.partsToBuy(true, []));
        });
        it('Test 4: Should throw an error with incorrect input first argument is number', () => {
            assert.throws(() => testObj.partsToBuy(0, []));
        });
        it('Test 5: Should throw an error with incorrect input second argument is string', () => {
            assert.throws(() => testObj.partsToBuy([], 'abc'));
        });
        it('Test 6: Should throw an error with incorrect input second argument is object', () => {
            assert.throws(() => testObj.partsToBuy([], {}));
        });
        it('Test 7: Should throw an error with incorrect input second argument is boolean', () => {
            assert.throws(() => testObj.partsToBuy([], true));
        });
        it('Test 8: Should throw an error with incorrect input second argument is number', () => {
            assert.throws(() => testObj.partsToBuy([], 0));
        });
        it('Test 9: Should throw an error with incorrect input all the argument are wrong', () => {
            assert.throws(() => testObj.partsToBuy(0, 0));
            assert.throws(() => testObj.partsToBuy({}, {}));
            assert.throws(() => testObj.partsToBuy(true, true));
            assert.throws(() => testObj.partsToBuy('', ''));
        });
        it('Test 10: Should return correct string with correct input', () => {
            assert.equal(testObj.partsToBuy([{ part: 'blowoff valve', price: 100 }, { part: 'injectors', price: 200 }], ['blowoff valve', 'injectors']), 300);
        });
        it('Test 11: Should return correct string with correct input', () => {
            assert.equal(testObj.partsToBuy([{ part: 'blowoff valve', price: 100 }, { part: 'injectors', price: 200 }], ['injectors']), 200);
        });
        it('Test 12: Should return correct string with correct input', () => {
            assert.equal(testObj.partsToBuy([{ part: 'blowoff valve', price: 100 }, { part: 'injectors', price: 200 }], ['blowoff valve']), 100);
        });
        it('Test 13: Should return correct string with correct input', () => {
            assert.equal(testObj.partsToBuy([{ part: 'blowoff valve', price: 100.25 }, { part: 'injectors', price: 200.25 }], ['blowoff valve', 'injectors']), 300.5);
        });
        it('Test 14: Should return correct string with correct input', () => {
            assert.equal(testObj.partsToBuy([{ part: 'blowoff valve', price: 145 }, { part: 'coil springs', price: 230 }], []), 0);
        });
    });
});