const { companyAdministration } = require('./companyAdministration');
const { assert } = require('chai');

describe('Test companyAdministration object', () => {
    let testObj;
    beforeEach(() => { testObj = companyAdministration; });
    describe('Test method hiringEmployee', () => {
        it('Test 1: Should throw an error if the position is different from Programmer', () => {
            assert.throws(() => { testObj.hiringEmployee('John', 'Plumber', 15); });
        });

        it('Test 2: Should return to be hired in this position', () => {
            assert.equal(testObj.hiringEmployee('John', 'Programmer', 3), 'John was successfully hired for the position Programmer.');
            assert.equal(testObj.hiringEmployee('John', 'Programmer', 3.5), 'John was successfully hired for the position Programmer.');
            assert.equal(testObj.hiringEmployee('John', 'Programmer', 10), 'John was successfully hired for the position Programmer.');
        });

        it('Test 3: Should return it\'s not to be approved for this position', () => {
            assert.equal(testObj.hiringEmployee('John', 'Programmer', 0), 'John is not approved for this position.');
            assert.equal(testObj.hiringEmployee('John', 'Programmer', 1), 'John is not approved for this position.');
            assert.equal(testObj.hiringEmployee('John', 'Programmer', 2), 'John is not approved for this position.');
            assert.equal(testObj.hiringEmployee('John', 'Programmer', 2.99), 'John is not approved for this position.');
        });
    });

    describe('Test method calculateSalary', () => {
        it('Test 1: Validate input data is corect', () => {
            assert.throws(() => { testObj.calculateSalary('abc'); });
            assert.throws(() => { testObj.calculateSalary(-1); });
        });

        it('Test 2: Should return correct value of salary', () => {
            assert.equal(testObj.calculateSalary(0), 0);
            assert.equal(testObj.calculateSalary(1), 15);
            assert.equal(testObj.calculateSalary(10), 150);
            assert.equal(testObj.calculateSalary(160), 2400);
            assert.closeTo(testObj.calculateSalary(1.5), 22.5, 0.01);
            assert.closeTo(testObj.calculateSalary(10.5), 157, 5, 0.01);
            assert.closeTo(testObj.calculateSalary(159.5), 2392.5, 0.01);
        });

        it('Test 3: Should return correct salary with bonus', () => {
            assert.equal(testObj.calculateSalary(160.5), 3407.5);
            assert.equal(testObj.calculateSalary(180), 3700);
            assert.equal(testObj.calculateSalary(200), 4000);
        });
    });

    describe('Test method firedEmployee', () => {
        it('Test 1: Validate input data is corect', () => {
            assert.throws(() => testObj.firedEmployee('mustBeArray', 0));
            assert.throws(() => testObj.firedEmployee({ mustBeArray: null }, 0));
            assert.throws(() => testObj.firedEmployee(['Correct'], 'abc'));
            assert.throws(() => testObj.firedEmployee(['Correct'], -1));
            assert.throws(() => testObj.firedEmployee(['Correct'], 1));
        });

        it('Test 2: Should return correct string after remove the element', () => {
            assert.equal(testObj.firedEmployee(['Petar', 'Ivan', 'George'], 1), 'Petar, George');
        });
    });
});