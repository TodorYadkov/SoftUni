const { numberOperations } = require('./03. Number Operations');
const { assert } = require('chai');

describe('Test numberOperations object', () => {
    let testObj;
    beforeEach(() => testObj = numberOperations);
    describe('Test method powNumber', () => {
        it('Test 1: Should return correct result', () => {
            assert.equal(testObj.powNumber(0), 0);
        });
        it('Test 2: Should return correct result', () => {
            assert.equal(testObj.powNumber(1), 1);
        });
        it('Test 3: Should return correct result', () => {
            assert.equal(testObj.powNumber(-1), 1);
        });
        it('Test 4: Should return correct result', () => {
            assert.equal(testObj.powNumber(2), 4);
        });
        it('Test 5: Should return correct result', () => {
            assert.equal(testObj.powNumber(-2), 4);
        });
    });

    describe('Test method numberChecker', () => {
        it('Test 1: Should throw error', () => {
            assert.throws(() => testObj.numberChecker(undefined));
        });
        it('Test 2: Should throw error', () => {
            assert.throws(() => testObj.numberChecker('a'));
        });
        it('Test 3: Should return correct string', () => {
            assert.equal(testObj.numberChecker(99), 'The number is lower than 100!');
        });
        it('Test 4: Should return correct string', () => {
            assert.equal(testObj.numberChecker(100), 'The number is greater or equal to 100!');
        });
        it('Test 5: Should return correct string', () => {
            assert.equal(testObj.numberChecker(101), 'The number is greater or equal to 100!');
        });
    });

    describe('Test method sumArrays', () => {
        it('Test 1: Should return correct result', () => {
            assert.deepEqual(testObj.sumArrays([1], [2]), [3]);
        });
        it('Test 2: Should return correct result', () => {
            assert.deepEqual(testObj.sumArrays([1, 2], [2, 3]), [3, 5]);
        });
        it('Test 3: Should return correct result', () => {
            assert.deepEqual(testObj.sumArrays([1, 2], [2]), [3, 2]);
        });
        it('Test 4: Should return correct result', () => {
            assert.deepEqual(testObj.sumArrays([1], [2, 3]), [3, 3]);
        });
    });
});