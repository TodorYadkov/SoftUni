const { testNumbers } = require('./testNumbers');
const { assert } = require('chai');

describe('Test testNumbers object', () => {
    let testObj;
    beforeEach(() => testObj = testNumbers);

    describe('Test sumNumbers method', () => {
        it('Test 1: Should return undefined with incorrect input', () => {
            assert.isUndefined(testObj.sumNumbers('a', 0));
        });
        it('Test 2: Should return undefined with incorrect input', () => {
            assert.isUndefined(testObj.sumNumbers([], 0));
        });
        it('Test 3: Should return undefined with incorrect input', () => {
            assert.isUndefined(testObj.sumNumbers({}, 0));
        });
        it('Test 4: Should return undefined with incorrect input', () => {
            assert.isUndefined(testObj.sumNumbers(true, 0));
        });
        it('Test 5: Should return undefined with incorrect input', () => {
            assert.isUndefined(testObj.sumNumbers(0, 'a'));
        });
        it('Test 6: Should return undefined with incorrect input', () => {
            assert.isUndefined(testObj.sumNumbers(0, []));
        });
        it('Test 7: Should return undefined with incorrect input', () => {
            assert.isUndefined(testObj.sumNumbers(0, {}));
        });
        it('Test 8: Should return undefined with incorrect input', () => {
            assert.isUndefined(testObj.sumNumbers(0, true));
        });
        it('Test 9: Should return undefined with incorrect input', () => {
            assert.isUndefined(testObj.sumNumbers(true, true));
        });
        it('Test 10: Should return correct sum', () => {
            assert.equal(testObj.sumNumbers(0, 1), '1.00');
        });
        it('Test 11: Should return correct sum', () => {
            assert.equal(testObj.sumNumbers(-1, 1), '0.00');
        });
        it('Test 12: Should return correct sum', () => {
            assert.equal(testObj.sumNumbers(-1, 0), '-1.00');
        });
        it('Test 13: Should return correct sum', () => {
            assert.equal(testObj.sumNumbers(1.11, 2.22), '3.33');
        });
    });

    describe('Test numberChecker method', () => {
        it('Test 1: Should throw an Error with a not a number input', () => {
            assert.throws(() => testObj.numberChecker('a'));
        });
        it('Test 2: Should throw an Error with a not a number input', () => {
            assert.throws(() => testObj.numberChecker([1, 2]));
        });
        it('Test 3: Should throw an Error with a not a number input', () => {
            assert.throws(() => testObj.numberChecker({}));
        });
        it('Test 4: Should return correct string with even number', () => {
            assert.equal(testObj.numberChecker(0), 'The number is even!');
        });
        it('Test 5: Should return correct string with even number', () => {
            assert.equal(testObj.numberChecker(-100), 'The number is even!');
        });
        it('Test 6: Should return correct string with even number', () => {
            assert.equal(testObj.numberChecker(100), 'The number is even!');
        });
        it('Test 7: Should return correct string with odd number', () => {
            assert.equal(testObj.numberChecker(1), 'The number is odd!');
        });
        it('Test 8: Should return correct string with odd number', () => {
            assert.equal(testObj.numberChecker(-101), 'The number is odd!');
        });
        it('Test 9: Should return correct string with odd number', () => {
            assert.equal(testObj.numberChecker(101), 'The number is odd!');
        });
    });

    describe('Test averageSumArray method', () => {
        it('Test 1: Should return correct average sum', () => {
            assert.equal(testObj.averageSumArray([0]), '0');
        });
        it('Test 2: Should return correct average sum', () => {
            assert.equal(testObj.averageSumArray([1]), '1');
        });
        it('Test 3: Should return correct average sum', () => {
            assert.equal(testObj.averageSumArray([1, 2]), '1.5');
        });
        it('Test 4: Should return correct average sum', () => {
            assert.equal(testObj.averageSumArray([1, 2, 3]), '2');
        });
        it('Test 5: Should return correct average sum', () => {
            assert.equal(testObj.averageSumArray([1, 2, 3, 4]), '2.5');
        });
        it('Test 6: Should return correct average sum', () => {
            assert.equal(testObj.averageSumArray([1.1, 2.2, 3.3, 4.4]), '2.75');
        });
    });
});