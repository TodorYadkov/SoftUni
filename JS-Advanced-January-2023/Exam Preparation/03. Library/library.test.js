const { library } = require('./library');
const { assert } = require('chai');

describe('Test library object', () => {
    describe('Test method calcPriceOfBook', () => {
        it('Test 1: Should throw error with invalid arguments', () => {
            assert.throws(() => library.calcPriceOfBook(1, 1));
        });
        it('Test 2: Should throw error with invalid arguments', () => {
            assert.throws(() => library.calcPriceOfBook(true, 1));
        });
        it('Test 3: Should throw error with invalid arguments', () => {
            assert.throws(() => library.calcPriceOfBook('a', 'a'));
        });
        it('Test 4: Should throw error with invalid arguments', () => {
            assert.throws(() => library.calcPriceOfBook('a', true));
        });
        it('Test 5: Should throw error with invalid arguments', () => {
            assert.throws(() => library.calcPriceOfBook('a', 1.1));
        });
        it('Test 6: Should throw error with invalid arguments', () => {
            assert.throws(() => library.calcPriceOfBook(1, 'a'));
        });
        it('Test 7: Should return correct string', () => {
            assert.equal(library.calcPriceOfBook('Love', 1981), 'Price of Love is 20.00');
        });
        it('Test 8: Should return correct string', () => {
            assert.equal(library.calcPriceOfBook('Love', 1980), 'Price of Love is 10.00');
        });
        it('Test 9: Should return correct string', () => {
            assert.equal(library.calcPriceOfBook('Love', 1979), 'Price of Love is 10.00');
        });
    });

    describe('Test method indBook', () => {
        it('Test 1: Should throw error with invalid arguments', () => {
            assert.throws(() => library.findBook([], 'Love'));
        });
        it('Test 2: Should return correct string', () => {
            assert.equal(library.findBook(['Hate'], 'Love'), 'The book you are looking for is not here!');
        });
        it('Test 3: Should return correct string', () => {
            assert.equal(library.findBook(['Love'], 'Love'), 'We found the book you want.');
        });
    });
    describe('Test method arrangeTheBooks', () => {
        it('Test 1: Should throw error with invalid arguments', () => {
            assert.throws(() => library.arrangeTheBooks(1.1));
        });
        it('Test 2: Should throw error with invalid arguments', () => {
            assert.throws(() => library.arrangeTheBooks(true));
        });
        it('Test 3: Should throw error with invalid arguments', () => {
            assert.throws(() => library.arrangeTheBooks(-1));
        });
        it('Test 4: Should return correct string', () => {
            assert.equal(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
        });
        it('Test 5: Should return correct string', () => {
            assert.equal(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
        });
    });
});