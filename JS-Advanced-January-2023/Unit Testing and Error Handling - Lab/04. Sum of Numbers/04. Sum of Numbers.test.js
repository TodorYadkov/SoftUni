// const { expect } = require('chai');
const { assert } = require('chai');
const { sum } = require('./04. Sum of Numbers');

describe('Test sum functionality', () => {
    it('Should add positive numbers', () => {
        let input = [1, 2, 3, 4, 5];
        let expectedResult = 15;

        let actualResult = sum(input);
        assert.equal(actualResult, expectedResult);
    });

    it('Return false when adding positive numbers', () => {
        let input = [10, 20, 30];
        let expectedResult = 15;

        let actualResult = sum(input);
        assert.notEqual(actualResult, expectedResult);
    });

    it('Should pass when adding negative numbers', () => {
        let input = [-1, -2, -3];
        let expectedResult = -6;

        let actualResult = sum(input);
        assert.equal(actualResult, expectedResult);
    });
})


// other variant 

describe('Test sum of numbers functionality', () => {
    it('works with positive integers', () => {
        expect(sum([3, 5])).to.equal(8, 'did not work with 3 and 5');
    });

    it('Should pass when adding negative numbers', () => {
        expect(sum([-1, -2, -3,])).to.equal(-6, 'did not working wit negative numbers');
    });

    it('works with empty array', () => {
        expect(sum([])).to.equal(0, 'did not work with empty array');
    });

    it('works with non-array', () => {
        expect(sum('123')).to.equal(6, 'not work with string')
    });

    it('work with one element in array', () => {
        expect(sum([1])).to.equal(1, 'not work with one element in array')
    });

    it('return false when adding positive numbers', () => {
        expect(sum([1, 2, 3])).to.not.equal(7,'not work correct with add numbers')
    });
});