const { movieTheater } = require('./03. Movie Theater');
const { assert } = require('chai');

describe('Test movieTheater object', () => {
    let testObj;
    beforeEach(() => testObj = movieTheater);
    describe('Test method ageRestrictions', () => {
        it('Test 1: Should return correct string with correct movieRating G', () => {
            assert.equal(testObj.ageRestrictions('G'), 'All ages admitted to watch the movie');
        });
        it('Test 2: Should return correct string with correct movieRating PG', () => {
            assert.equal(testObj.ageRestrictions('PG'), 'Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        });
        it('Test 3: Should return correct string with correct movieRating R', () => {
            assert.equal(testObj.ageRestrictions('R'), 'Restricted! Under 17 requires accompanying parent or adult guardian');
        });
        it('Test 4: Should return correct string with correct movieRating NC-17', () => {
            assert.equal(testObj.ageRestrictions('NC-17'), 'No one under 17 admitted to watch the movie');
        });
        it('Test 5: Should return correct string with incorrect movieRating abc', () => {
            assert.equal(testObj.ageRestrictions('abc'), 'There are no age restrictions for this movie');
        });
    });

    describe('Test method moneySpent', () => {
        it('Test 1: Should throw an error with all the input is string', () => {
            assert.throws(() => testObj.moneySpent('mustBeANumber', 'mustBeAArray', 'mustBeAArray'));
        });
        it('Test 2: Should throw an error with all the input is object', () => {
            assert.throws(() => testObj.moneySpent({}, {}, {}));
        });
        it('Test 3: Should throw an error with first attribute of the input is string', () => {
            assert.throws(() => testObj.moneySpent('mustBeANumber', [], []));
        });
        it('Test 4: Should throw an error with first attribute of the input is object', () => {
            assert.throws(() => testObj.moneySpent({}, [], []));
        });
        it('Test 5: Should throw an error with first attribute of the input is boolean', () => {
            assert.throws(() => testObj.moneySpent(true, {}, {}));
        });
        it('Test 6: Should throw an error with second attribute of the input is string', () => {
            assert.throws(() => testObj.moneySpent(0, 'mustBeAArray', []));
        });
        it('Test 7: Should throw an error with second attribute of the input is object', () => {
            assert.throws(() => testObj.moneySpent(0, {}, []));
        });
        it('Test 8: Should throw an error with second attribute of the input is boolean', () => {
            assert.throws(() => testObj.moneySpent(0, true, []));
        });
        it('Test 9: Should throw an error with third attribute of the input is string', () => {
            assert.throws(() => testObj.moneySpent(0, [], 'mustBeAArray'));
        });
        it('Test 10: Should throw an error with third attribute of the input is object', () => {
            assert.throws(() => testObj.moneySpent(0, [], {}));
        });
        it('Test 11: Should throw an error with third attribute of the input is boolean', () => {
            assert.throws(() => testObj.moneySpent(0, [], true));
        });
        it('Test 12: Should throw an error with last two attributes of the input is wrong', () => {
            assert.throws(() => testObj.moneySpent(0, {}, {}));
            assert.throws(() => testObj.moneySpent(0, 'mustBeAArray', 'mustBeAArray'));
        });
        it('Test 13: Should return corect string with correct input without discount', () => {
            assert.equal(testObj.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda', 'Water']), 'The total cost for the purchase is 29.50');
        });
        it('Test 14: Should return corect string with correct input without discount', () => {
            assert.equal(testObj.moneySpent(1, ['Nachos', 'Popcorn'], []), 'The total cost for the purchase is 25.50');
        });
        it('Test 15: Should return corect string with correct input without discount', () => {
            assert.equal(testObj.moneySpent(1, ['Nachos', 'Popcorn'], ['Water']), 'The total cost for the purchase is 27.00');
        });
        it('Test 16: Should return corect string with correct input without discount', () => {
            assert.equal(testObj.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda']), 'The total cost for the purchase is 28.00');
        });
        it('Test 17: Should return corect string with correct input without discount', () => {
            assert.equal(testObj.moneySpent(1, [], ['Soda', 'Water']), 'The total cost for the purchase is 19.00');
        });
        it('Test 18: Should return corect string with correct input without discount', () => {
            assert.equal(testObj.moneySpent(1, ['Nachos'], ['Soda', 'Water']), 'The total cost for the purchase is 25.00');
        });
        it('Test 19: Should return corect string with correct input without discount', () => {
            assert.equal(testObj.moneySpent(1, ['Popcorn'], ['Soda', 'Water']), 'The total cost for the purchase is 23.50');
        });
        it('Test 20: Should return corect string with correct input without discount', () => {
            assert.equal(testObj.moneySpent(1, [], []), 'The total cost for the purchase is 15.00');
        });
        it('Test 21: Should return corect string with correct input without discount', () => {
            assert.equal(testObj.moneySpent(0, [], []), 'The total cost for the purchase is 0.00');
        });
        it('Test 22: Should return corect string with correct input with discount', () => {
            assert.equal(testObj.moneySpent(10, ['Nachos', 'Popcorn'], ['Soda', 'Water']), 'The total cost for the purchase with applied discount is 131.60');
        });
        it('Test 23: Should return corect string with correct input with discount', () => {
            assert.equal(testObj.moneySpent(10, [], []), 'The total cost for the purchase with applied discount is 120.00');
        });
        it('Test 24: Should return corect string with correct input with discount', () => {
            assert.equal(testObj.moneySpent(10, ['Nachos', 'Popcorn'], []), 'The total cost for the purchase with applied discount is 128.40');
        });
        it('Test 25: Should return corect string with correct input with discount', () => {
            assert.equal(testObj.moneySpent(10, ['Nachos', 'Popcorn'], ['Water']), 'The total cost for the purchase with applied discount is 129.60');
        });
        it('Test 26: Should return corect string with correct input with discount', () => {
            assert.equal(testObj.moneySpent(10, ['Nachos', 'Popcorn'], ['Soda']), 'The total cost for the purchase with applied discount is 130.40');
        });
        it('Test 27: Should return corect string with correct input with discount', () => {
            assert.equal(testObj.moneySpent(10, [], ['Soda', 'Water']), 'The total cost for the purchase with applied discount is 123.20');
        });
        it('Test 28: Should return corect string with correct input with discount', () => {
            assert.equal(testObj.moneySpent(10, ['Popcorn'], ['Soda', 'Water']), 'The total cost for the purchase with applied discount is 126.80');
        });
        it('Test 29: Should return corect string with correct input with discount', () => {
            assert.equal(testObj.moneySpent(10, ['Nachos'], ['Soda', 'Water']), 'The total cost for the purchase with applied discount is 128.00');
        });
    });

    describe('Test method reservation', () => {
        it('Test 1: Should throw an error with all attributes are incorrect', () => {
            assert.throws(() => testObj.reservation('mustBeAArray', 'mustBeANumber'));
        });
        it('Test 2: Should throw an error with first attribute of the input is number', () => {
            assert.throws(() => testObj.reservation(1, 0));
        });
        it('Test 3: Should throw an error with first attribute of the input is object', () => {
            assert.throws(() => testObj.reservation({}, 0));
        });
        it('Test 4: Should throw an error with first attribute of the input is boolean', () => {
            assert.throws(() => testObj.reservation(true, 0));
        });
        it('Test 5: Should throw an error with second attribute of the input is array', () => {
            assert.throws(() => testObj.reservation([], []));
        });
        it('Test 6: Should throw an error with second attribute of the input is object', () => {
            assert.throws(() => testObj.reservation([], {}));
        });
        it('Test 7: Should throw an error with second attribute of the input is boolean', () => {
            assert.throws(() => testObj.reservation([], true));
        });
        it('Test 8: Should return correct string with correct input', () => {
            assert.equal(testObj.reservation([{ rowNumber: 1, freeSeats: 10 }, { rowNumber: 2, freeSeats: 5 }], 1), 2);
        });
        it('Test 9: Should return correct string with correct input', () => {
            assert.equal(testObj.reservation([{ rowNumber: 1, freeSeats: 10 }, { rowNumber: 2, freeSeats: 5 }], 3), 2);
        });
        it('Test 10: Should return correct string with correct input', () => {
            assert.equal(testObj.reservation([{ rowNumber: 1, freeSeats: 10 }, { rowNumber: 2, freeSeats: 5 }], 5), 2);
        });
        it('Test 11: Should return correct string with correct input', () => {
            assert.equal(testObj.reservation([{ rowNumber: 1, freeSeats: 10 }, { rowNumber: 2, freeSeats: 5 }], 6), 1);
        });
        it('Test 12: Should return correct string with correct input', () => {
            assert.equal(testObj.reservation([{ rowNumber: 1, freeSeats: 10 }, { rowNumber: 2, freeSeats: 5 }], 7), 1);
        });
        it('Test 13: Should return correct string with correct input', () => {
            assert.equal(testObj.reservation([{ rowNumber: 1, freeSeats: 10 }, { rowNumber: 2, freeSeats: 5 }, { rowNumber: 3, freeSeats: 1 }], 1), 3);
        });
    });
});