const { StringBuilder } = require('./13. String Builder');
const { assert } = require('chai');

describe('Test class StringBuilder', () => {

    describe('Test input data', () => {
        it('Test 1: Should return a string as all the input si valid', () => {
            const abc = new StringBuilder('abc');
            const test = new StringBuilder('test');
            const und = new StringBuilder(undefined);
            assert.equal(abc.toString(), 'abc');
            assert.equal(test.toString(), 'test');
            assert.equal(und.toString(), '');
        });

        it('Test 2: Should return an error when input is non-string', () => {
            assert.throws(() => new StringBuilder(123));
            assert.throws(() => new StringBuilder(null));
        });
    });

    describe('Test method append()', () => {
        it('Test 1: Should return an error with non-string', () => {
            const t = new StringBuilder('abc');
            assert.throws(() => t.append(1));
            assert.throws(() => t.append(null));
        });

        it('Test 2: Should return a string', () => {
            const t = new StringBuilder('abc');
            t.append('def')
            assert.equal(t.toString(), 'abcdef');
            t.append('ghi');
            assert.equal(t.toString(), 'abcdefghi');
            t.append('123');
            assert.equal(t.toString(), 'abcdefghi123');
            t.remove(9, 3);
            assert.equal(t.toString(), 'abcdefghi');
        });
    });

    describe('Test method prepend()', () => {
        it('Test 1: Should return an error with non-string', () => {
            const t = new StringBuilder('abc');
            assert.throws(() => t.prepend(1));
            assert.throws(() => t.prepend(null));
        });

        it('Test 2: Should return a string', () => {
            const t = new StringBuilder('abc');
            t.prepend('def')
            assert.equal(t.toString(), 'defabc');
            t.prepend('ghi');
            assert.equal(t.toString(), 'ghidefabc');
            t.prepend('123');
            assert.equal(t.toString(), '123ghidefabc');
            t.remove(0, 3);
            assert.equal(t.toString(), 'ghidefabc');
        });
    });

    describe('Test method insertAt()', () => {
        it('Test 1: Should return an error with non-string', () => {
            const t = new StringBuilder('abc');
            assert.throws(() => t.insertAt(1, 1));
            assert.throws(() => t.insertAt(Boolean, 1));
        });

        it('Test 2: Should return a string', () => {
            const t = new StringBuilder('');
            t.insertAt('a', 0);
            assert.equal(t.toString(), 'a');
            t.insertAt('b', 1);
            assert.equal(t.toString(), 'ab');
            t.insertAt('c', 2);
            assert.equal(t.toString(), 'abc');
            t.insertAt('123', 0);
            assert.equal(t.toString(), '123abc');
            t.remove(0, 3);
            assert.equal(t.toString(), 'abc');
        });
    });

    describe('Test method remove()', () => {
        it('Test 1: Should return a string', () => {
            const t = new StringBuilder('abc');
            t.remove(0, 1);
            assert.equal(t.toString(), 'bc');
            t.remove(1, 1);
            assert.equal(t.toString(), 'b');
            t.remove(0, 1);
            assert.equal(t.toString(), '');
        });
    });

    describe('Test method toString()', () => {
        it('Test 1: Should return a string', () => {
            const test1 = new StringBuilder('abc');
            const test2 = new StringBuilder('');
            assert.equal(test1.toString(), 'abc');
            assert.equal(test2.toString(), '');
        });
    });

    describe('Test all methods', () => {
        it('Test 1: Should return a string', () => {
            const t = new StringBuilder('I ');
            t.append('JavaScript!');
            assert.equal(t.toString(), 'I JavaScript!');
            t.prepend('like ');
            assert.equal(t.toString(), 'like I JavaScript!');
            t.insertAt('like ', 7);
            assert.equal(t.toString(), 'like I like JavaScript!');
            t.remove(0, 5);
            assert.equal(t.toString(), 'I like JavaScript!');
        });
    });
});