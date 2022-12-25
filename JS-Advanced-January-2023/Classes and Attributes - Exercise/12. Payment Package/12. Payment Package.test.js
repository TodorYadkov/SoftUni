const { PaymentPackage } = require('./12. Payment Package');
const { assert } = require('chai');

describe('Test Payment package class', () => {
    describe('Test to correct input data', () => {
        it('Test 1: Test a new instance for the required inputs', () => {
            const testInput = new PaymentPackage('testName', 10);
            assert.equal(testInput._name, 'testName');
            assert.equal(testInput._value, 10);
            assert.equal(testInput._VAT, 20);
            assert.isTrue(testInput._active);
        });
    });

    describe('Test constructor', () => {
        it('Test 1: Test name with correct string', () => {
            const t = new PaymentPackage('testName', 1);
            assert.equal(t._name, 'testName');
        });

        it('Test 2: Test value with correct number', () => {
            const t = new PaymentPackage('abc', 100);
            assert.equal(t.value, 100);
            assert.doesNotThrow(() => t.value = 0);
        });

        it('Test 3: Test VAT on default', () => {
            const t = new PaymentPackage('abc', 100);
            assert.equal(t.VAT, 20);
        });

        it('Test 4: Test VAT with correct new value', () => {
            const t = new PaymentPackage('abc', 100);
            t.VAT = 30;
            assert.equal(t.VAT, 30);
        });

        it('Test 5: Test active on default ', () => {
            const t = new PaymentPackage('abc', 100);
            assert.equal(t.active, true);
        });

        it('Test 6: Test active with new correct value', () => {
            const t = new PaymentPackage('abc', 100);
            t.active = false;
            assert.equal(t.active, false);
        });

        it('Test 7: Should throw an error, name is not a string', () => {
            assert.throws(() => new PaymentPackage(100, 0), Error);
        });

        it('Test 8: Should throw an error, the name is empty string', () => {
            assert.throws(() => new PaymentPackage('', 0));
        });

        it('Test 9: Should throw an error, the value is not a number', () => {
            assert.throws(() => new PaymentPackage('abc', 'test'));
        });

        it('Test 10: Should throw an error, the value is a negative number', () => {
            assert.throws(() => new PaymentPackage('abc', -10));
        });

        it('Test 11: Should throw an error, the VAT is string', () => {
            assert.throws(() => {
                const t = new PaymentPackage('abc', 1);
                t.VAT = 'test';
            }, Error);
        });

        it('Test 12: Should throw an error, the VAT is a negative number', () => {
            assert.throws(() => {
                const t = new PaymentPackage('abc', 1);
                t.VAT = -10;
            }, Error);
        });

        it('Test 13: Should throw an error, the active is not a boolean', () => {
            assert.throws(() => {
                const t = new PaymentPackage('abc', 1);
                t.active = 'test';
            }, Error);
        });

        it('Test 14: Should throw an error, the name and the value is not correct', () => {
            assert.throws(() => new PaymentPackage('abc', 'test'));
        });
    });

    describe('Test method toString()', () => {
        it('Test 1: Should return a string as all the input is correct', () => {
            const t = new PaymentPackage('abc', 10);
            const output = 'Package: abc\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12';
            assert.equal(t.toString(), output);
        });

        it('Test 2: Should return a string when change the value on VAT', () => {
            const t = new PaymentPackage('abc', 10);
            t.VAT = 30;
            const output = 'Package: abc\n- Value (excl. VAT): 10\n- Value (VAT 30%): 13';
            assert.equal(t.toString(), output);
        });

        it('Test 3: Should return a string when change the active with false', () => {
            const t = new PaymentPackage('abc', 10);
            t._active = false;
            const output = 'Package: abc (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12';
            assert.equal(t.toString(), output);
        });

        it('Test 4: Should return a string as all the input is correct', () => {
            const t = new PaymentPackage('abc', 123);
            t.VAT = 30;
            t._active = false;
            const output = 'Package: abc (inactive)\n- Value (excl. VAT): 123\n- Value (VAT 30%): 159.9';
            assert.equal(t.toString(), output);
        });
    });
});