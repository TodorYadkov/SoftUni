const { mathEnforcer } = require('./04. Math Enforcer');
const { assert } = require('chai');

describe('Test mathEnforcer function', () => {
    describe('addFive', () => {
        it('Should return 6', () => {
            assert.equal(mathEnforcer.addFive(1), 6);
        });
        it('Should return 4', () => {
            assert.equal(mathEnforcer.addFive(-1), 4);
        });
        it('Should return -5', () => {
            assert.equal(mathEnforcer.addFive(-10), -5);
        });
        it('Should return undefined with non-number parameter', () => {
            assert.isUndefined(mathEnforcer.addFive('test'));
        });
        it('Should return 6.1', () => {
            assert.closeTo(mathEnforcer.addFive(1.1), 6.1, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('Should return 1', () => {
            assert.equal(mathEnforcer.subtractTen(11), 1);
        });
        it('Should return -20', () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        });
        it('Should return undefined with non-number parameter', () => {
            assert.isUndefined(mathEnforcer.subtractTen('test'));
        });
        it('Should return 1.1', () => {
            assert.closeTo(mathEnforcer.subtractTen(11.1), 1.1, 0.01);
        });
    });

    describe('sum', () => {
        it('Should return 2', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2);
        });
        it('Should return 0', () => {
            assert.equal(mathEnforcer.sum(1, -1), 0);
        });
        it('Should return -2', () => {
            assert.equal(mathEnforcer.sum(-1, -1), -2);
        });
        it('Should return undefined with non-number parameter', () => {
            assert.isUndefined(mathEnforcer.sum('test', 'test'));
        });
        it('Should return undefined with non-number parameter', () => {
            assert.isUndefined(mathEnforcer.sum('test', 1));
        });
        it('Should return undefined with non-number parameter', () => {
            assert.isUndefined(mathEnforcer.sum(1, 'test'));
        });
        it('Should return 3.3', () => {
            assert.closeTo(mathEnforcer.sum(1.1, 2.2), 3.3, 0.01);
        });
    });
});