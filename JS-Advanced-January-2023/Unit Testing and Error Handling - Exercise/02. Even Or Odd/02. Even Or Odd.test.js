const { isOddOrEven } = require('./02. Even Or Odd');
const { assert } = require('chai');

describe('Test even or odd length on string', () => {
    it('Should return even on isOddOrEven(\'hi\')', () => {
        assert.equal(isOddOrEven('hi'), 'even');
    });
    it('Should return odd on isOddOrEven()\'hello\'', () => {
        assert.equal(isOddOrEven('hello'), 'odd');
    });
    it('should return odd on isOddOrEven(\'George is at home.\')', () => {
        assert.equal(isOddOrEven('George is at home'), 'odd');
    });
    it('Should return undefined on non string element', () => {
        assert.isUndefined(isOddOrEven(2));
        assert.isUndefined(isOddOrEven([]));
        assert.isUndefined(isOddOrEven({}));
    });
});