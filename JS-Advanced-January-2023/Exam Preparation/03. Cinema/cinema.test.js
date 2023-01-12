const { cinema } = require('./cinema');
const { assert } = require('chai');

describe('Test cinema object', () => {
    let testObj;
    beforeEach(() => testObj = cinema);
    describe('Test method showMovies', () => {
        it('Test 1: Should return correct string when the input array is zero', () => {
            assert.equal(testObj.showMovies([]), 'There are currently no movies to show.');
        });
        it('Test 2: Should return correct availables movies', () => {
            assert.equal(testObj.showMovies(['King Kong', 'The Tomorrow War', 'Joker']), 'King Kong, The Tomorrow War, Joker');
        });
    });
    describe('Test method ticketPrice', () => {
        it('Test 1: Should return correct price', () => {
            assert.equal(testObj.ticketPrice('Premiere'), '12.00');
        });
        it('Test 2: Should return correct price', () => {
            assert.equal(testObj.ticketPrice('Normal'), '7.50');
        });
        it('Test 3: Should return correct price', () => {
            assert.equal(testObj.ticketPrice('Discount'), '5.50');
        });
        it('Test 4: Should throw an Error if the projection type is not in the schedule', () => {
            assert.throws(() => testObj.ticketPrice('a'));
        });
    });
    describe('Test method swapSeatsInHall', () => {
        it('Test 1: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall('a', 1), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 2: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall([], 1), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 3: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall({}, 1), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 4: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall(true, 1), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 5: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall(0, 1), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 6: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall(21, 1), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 7: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall(1, 'a'), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 8: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall(1, []), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 9: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall(1, {}), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 10: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall(1, true), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 11: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall(1, 0), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 12: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall(1, 21), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 13: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall(21, 21), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 14: Should return correct string with incorrect input', () => {
            assert.equal(testObj.swapSeatsInHall(0, 0), 'Unsuccessful change of seats in the hall.');
        });
        it('Test 15: Should return correct string with correct input', () => {
            assert.equal(testObj.swapSeatsInHall(1, 2), 'Successful change of seats in the hall.');
        });
        it('Test 16: Should return correct string with correct input', () => {
            assert.equal(testObj.swapSeatsInHall(1, 20), 'Successful change of seats in the hall.');
        });
        it('Test 16: Should return correct string with correct input', () => {
            assert.equal(testObj.swapSeatsInHall(20, 1), 'Successful change of seats in the hall.');
        });
    });
});