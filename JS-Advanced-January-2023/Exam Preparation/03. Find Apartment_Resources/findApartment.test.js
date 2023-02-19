const { findNewApartment } = require('./findApartment');
const { assert } = require('chai');

describe('Test object findNewApartment', function () {
    let testObj;
    beforeEach(() => testObj = findNewApartment);
    describe('Test method isGoodLocation', () => {
        it('Test 1', () => {
            assert.throws(() => testObj.isGoodLocation(1, true), 'Invalid input!');
        });
        it('Test 2', () => {
            assert.throws(() => testObj.isGoodLocation([], true), 'Invalid input!');
        });
        it('Test 3', () => {
            assert.throws(() => testObj.isGoodLocation({}, true), 'Invalid input!');
        });
        it('Test 4', () => {
            assert.throws(() => testObj.isGoodLocation(true, true), 'Invalid input!');
        });
        it('Test 5', () => {
            assert.throws(() => testObj.isGoodLocation('abc', 'a'), 'Invalid input!');
        });
        it('Test 6', () => {
            assert.throws(() => testObj.isGoodLocation('abc', 1), 'Invalid input!');
        });
        it('Test 7', () => {
            assert.throws(() => testObj.isGoodLocation('abc', []), 'Invalid input!');
        });
        it('Test 8', () => {
            assert.throws(() => testObj.isGoodLocation('abc', {}), 'Invalid input!');
        });
        it('Test 9', () => {
            assert.throws(() => testObj.isGoodLocation(true, {}), 'Invalid input!');
        });
        it('Test 10', () => {
            assert.equal(testObj.isGoodLocation('a', true), 'This location is not suitable for you.');
        });
        it('Test 11', () => {
            assert.equal(testObj.isGoodLocation('Sofia', true), 'You can go on home tour!');
        });
        it('Test 12', () => {
            assert.equal(testObj.isGoodLocation('Sofia', false), 'There is no public transport in area.');
        });
        it('Test 13', () => {
            assert.equal(testObj.isGoodLocation('Plovdiv', true), 'You can go on home tour!');
        });
        it('Test 14', () => {
            assert.equal(testObj.isGoodLocation('Plovdiv', false), 'There is no public transport in area.');
        });
        it('Test 15', () => {
            assert.equal(testObj.isGoodLocation('Varna', true), 'You can go on home tour!');
        });
        it('Test 16', () => {
            assert.equal(testObj.isGoodLocation('Varna', false), 'There is no public transport in area.');
        });
    });
    describe('Test method isLargeEnough', () => {
        it('Test 1', () => {
            assert.throws(() => testObj.isLargeEnough(1, 1), 'Invalid input!');
        });
        it('Test 2', () => {
            assert.throws(() => testObj.isLargeEnough('a', 1), 'Invalid input!');
        });
        it('Test 3', () => {
            assert.throws(() => testObj.isLargeEnough({}, 1), 'Invalid input!');
        });
        it('Test 4', () => {
            assert.throws(() => testObj.isLargeEnough(true, 1), 'Invalid input!');
        });
        it('Test 5', () => {
            assert.throws(() => testObj.isLargeEnough([], 0), 'Invalid input!');
        });
        it('Test 6', () => {
            assert.throws(() => testObj.isLargeEnough([1], '1'), 'Invalid input!');
        });
        it('Test 7', () => {
            assert.throws(() => testObj.isLargeEnough([1], []), 'Invalid input!');
        });
        it('Test 8', () => {
            assert.throws(() => testObj.isLargeEnough([1], {}), 'Invalid input!');
        });
        it('Test 9', () => {
            assert.throws(() => testObj.isLargeEnough([1], true), 'Invalid input!');
        });
        it('Test 10', () => {
            assert.throws(() => testObj.isLargeEnough([], '1'), 'Invalid input!');
        });
        it('Test 11', () => {
            assert.equal(testObj.isLargeEnough([1, 2, 3, 4, 5], 5), '5');
        });
        it('Test 12', () => {
            assert.equal(testObj.isLargeEnough([1, 2, 3], 2), '2, 3');
        });
        it('Test 13', () => {
            assert.equal(testObj.isLargeEnough([1, 2, 3, 4, 5], 0), '1, 2, 3, 4, 5');
        });
    });
    describe('Test method isItAffordable', () => {
        it('Test 1', () => {
            assert.throws(() => testObj.isItAffordable('1', 1), 'Invalid input!');
        });
        it('Test 2', () => {
            assert.throws(() => testObj.isItAffordable([], 1), 'Invalid input!');
        });
        it('Test 3', () => {
            assert.throws(() => testObj.isItAffordable({}, 1), 'Invalid input!');
        });
        it('Test 4', () => {
            assert.throws(() => testObj.isItAffordable(true, 1), 'Invalid input!');
        });
        it('Test 5', () => {
            assert.throws(() => testObj.isItAffordable(0, 1), 'Invalid input!');
        });
        it('Test 6', () => {
            assert.throws(() => testObj.isItAffordable(-1, 1), 'Invalid input!');
        });
        it('Test 7', () => {
            assert.throws(() => testObj.isItAffordable(1, '1'), 'Invalid input!');
        });
        it('Test 8', () => {
            assert.throws(() => testObj.isItAffordable(1, []), 'Invalid input!');
        });
        it('Test 9', () => {
            assert.throws(() => testObj.isItAffordable(1, {}), 'Invalid input!');
        });
        it('Test 10', () => {
            assert.throws(() => testObj.isItAffordable(1, true), 'Invalid input!');
        });
        it('Test 11', () => {
            assert.throws(() => testObj.isItAffordable(1, 0), 'Invalid input!');
        });
        it('Test 12', () => {
            assert.throws(() => testObj.isItAffordable(1, -1), 'Invalid input!');
        });
        it('Test 13', () => {
            assert.throws(() => testObj.isItAffordable(0, 0), 'Invalid input!');
        });
        it('Test 14', () => {
            assert.throws(() => testObj.isItAffordable(-1, -1), 'Invalid input!');
        });
        it('Test 15', () => {
            assert.equal(testObj.isItAffordable(2, 1), 'You don\'t have enough money for this house!');
        });
        it('Test 16', () => {
            assert.equal(testObj.isItAffordable(1, 1), 'You can afford this home!');
        });
        it('Test 17', () => {
            assert.equal(testObj.isItAffordable(1, 10), 'You can afford this home!');
        });
    });
});