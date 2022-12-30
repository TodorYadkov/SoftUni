const { motorcycleRider } = require('./Motorcycle Rider');
const { assert } = require('chai');

describe('Test motorcycleRider object', () => {
    let testObj;
    beforeEach(() => testObj = motorcycleRider);
    describe('Test method licenseRestriction', () => {
        it('Test 1: Should throw new Error with not correct input', () => {
            assert.throws(() => testObj.licenseRestriction('am'));
            assert.throws(() => testObj.licenseRestriction('a1'));
            assert.throws(() => testObj.licenseRestriction('a2'));
            assert.throws(() => testObj.licenseRestriction('a'));
            assert.throws(() => testObj.licenseRestriction(1));
            assert.throws(() => testObj.licenseRestriction([]));
            assert.throws(() => testObj.licenseRestriction({}));
        });
        it('Test 2: Should return correct string with AM', () => {
            assert.equal(testObj.licenseRestriction('AM'), 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });
        it('Test 3: Should return correct string with A1', () => {
            assert.equal(testObj.licenseRestriction('A1'), 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });
        it('Test 4: Should return correct string with A2', () => {
            assert.equal(testObj.licenseRestriction('A2'), 'Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });
        it('Test 5: Should return correct string with A', () => {
            assert.equal(testObj.licenseRestriction('A'), 'No motorcycle restrictions, and the minimum age is 24.');
        });
    });

    describe('Test method motorcycleShowroom', () => {
        it('Test 1: Should throw new Error with not correct input', () => {
            // engineVolume must not be an empty array and maximumEngineVolume must be less than 50
            assert.throws(() => testObj.motorcycleShowroom('mustBeAnNonEmptyArray', 'mustBeANumberGreaterThan50'));
            assert.throws(() => testObj.motorcycleShowroom([], 100));
            assert.throws(() => testObj.motorcycleShowroom({}, 100));
            assert.throws(() => testObj.motorcycleShowroom({}, 100));
            assert.throws(() => testObj.motorcycleShowroom(['125'], 0));
            assert.throws(() => testObj.motorcycleShowroom(['125'], 49));
            assert.throws(() => testObj.motorcycleShowroom(['125'], '100'));
        });
        it('Test 2: Should return correct string with correct input', () => {
            assert.equal(testObj.motorcycleShowroom(['125', '250', '600'], 600), 'There are 3 available motorcycles matching your criteria!');
            assert.equal(testObj.motorcycleShowroom(['125', '250', '600'], 250), 'There are 2 available motorcycles matching your criteria!');
            assert.equal(testObj.motorcycleShowroom(['125', '250', '600'], 150.5), 'There are 1 available motorcycles matching your criteria!');
            assert.equal(testObj.motorcycleShowroom(['125', '250', '600'], 50), 'There are 0 available motorcycles matching your criteria!');
        });
    });

    describe('Test method otherSpendings', () => {
        it('Test 1: Should throw new Error with not correct input', () => {
            assert.throws(() => testObj.otherSpendings('mustBeArray', 'mustBeArray', 'mustBeBoolean'));
            assert.throws(() => testObj.otherSpendings([], 'mustBeArray', 'mustBeBoolean'));
            assert.throws(() => testObj.otherSpendings('mustBeArray', [], 'mustBeBoolean'));
            assert.throws(() => testObj.otherSpendings('mustBeArray', 'mustBeArray', true));
            assert.throws(() => testObj.otherSpendings([], [], 'mustBeBoolean'));
            assert.throws(() => testObj.otherSpendings('mustBeArray', [], true));
            assert.throws(() => testObj.otherSpendings([], 'mustBeArray', true));
        });
        it('Test 2: Should return correct string with correct input', () => {
            assert.equal(testObj.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false), 'You spend $600.00 for equipment and consumables!');
            assert.equal(testObj.otherSpendings(['helmet', 'jacked'], ['engine oil'], false), 'You spend $570.00 for equipment and consumables!');
            assert.equal(testObj.otherSpendings(['helmet', 'jacked'], ['oil filter'], false), 'You spend $530.00 for equipment and consumables!');
            assert.equal(testObj.otherSpendings(['helmet', 'jacked'], [], false), 'You spend $500.00 for equipment and consumables!');
            assert.equal(testObj.otherSpendings(['helmet'], ['engine oil', 'oil filter'], false), 'You spend $300.00 for equipment and consumables!');
            assert.equal(testObj.otherSpendings(['jacked'], ['engine oil', 'oil filter'], false), 'You spend $400.00 for equipment and consumables!');
            assert.equal(testObj.otherSpendings([], ['engine oil', 'oil filter'], false), 'You spend $100.00 for equipment and consumables!');
            assert.equal(testObj.otherSpendings([], [], false), 'You spend $0.00 for equipment and consumables!');
            assert.equal(testObj.otherSpendings([], [], true), 'You spend $0.00 for equipment and consumables with 10% discount!');
            assert.equal(testObj.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true), 'You spend $540.00 for equipment and consumables with 10% discount!');
            assert.equal(testObj.otherSpendings(['helmet', 'jacked'], ['engine oil'], true), 'You spend $513.00 for equipment and consumables with 10% discount!');
            assert.equal(testObj.otherSpendings(['helmet', 'jacked'], ['oil filter'], true), 'You spend $477.00 for equipment and consumables with 10% discount!');
            assert.equal(testObj.otherSpendings(['helmet'], ['engine oil', 'oil filter'], true), 'You spend $270.00 for equipment and consumables with 10% discount!');
            assert.equal(testObj.otherSpendings(['jacked'], ['engine oil', 'oil filter'], true), 'You spend $360.00 for equipment and consumables with 10% discount!');
        });
    });
});
