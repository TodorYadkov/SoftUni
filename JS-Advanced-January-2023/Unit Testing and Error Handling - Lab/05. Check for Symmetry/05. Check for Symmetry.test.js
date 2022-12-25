const { expect } = require('chai');
const { isSymmetric } = require('./05. Check for Symmetry');

describe('Symmetry Checker', () => {
    it('works with symmetric numeric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false for non-symetric numeric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('works with symetric odd-length array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('works with symetric string array', () => {
        expect(isSymmetric(['a','b','b','a'])).to.be.true;
    });

    it('returns false for string param', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it('returns false for type mismatched elements', () => {
        expect(isSymmetric([1,2,'1'])).to.be.false;
    });
});