const { flowerShop } = require('./flowerShop');
const { assert } = require('chai');

describe('Test flowerShop object', () => {
    let instance;
    beforeEach(() => instance = flowerShop);
    describe('Test metod calcPriceOfFlowers', () => {
        it('Test 1: Should throw an Errror when first argument is number', () => {
            assert.throws(() => instance.calcPriceOfFlowers(1, 0, 0));
        });
        it('Test 2: Should throw an Errror when first argument is array', () => {
            assert.throws(() => instance.calcPriceOfFlowers([], 0, 0));
        });
        it('Test 3: Should throw an Errror when first argument is object', () => {
            assert.throws(() => instance.calcPriceOfFlowers({}, 0, 0));
        });
        it('Test 4: Should throw an Errror when first argument is bollean', () => {
            assert.throws(() => instance.calcPriceOfFlowers(true, 0, 0));
        });
        it('Test 5: Should throw an Errror when second argument is string', () => {
            assert.throws(() => instance.calcPriceOfFlowers('a', 'b', 0));
        });
        it('Test 6: Should throw an Errror when second argument is array', () => {
            assert.throws(() => instance.calcPriceOfFlowers('a', [], 0));
        });
        it('Test 7: Should throw an Errror when second argument is object', () => {
            assert.throws(() => instance.calcPriceOfFlowers('a', {}, 0));
        });
        it('Test 8: Should throw an Errror when second argument is bollean', () => {
            assert.throws(() => instance.calcPriceOfFlowers('a', true, 0));
        });
        it('Test 9: Should throw an Errror when third argument is string', () => {
            assert.throws(() => instance.calcPriceOfFlowers('a', 0, 'b'));
        });
        it('Test 10: Should throw an Errror when third argument is array', () => {
            assert.throws(() => instance.calcPriceOfFlowers('a', 0, []));
        });
        it('Test 11: Should throw an Errror when third argument is object', () => {
            assert.throws(() => instance.calcPriceOfFlowers('a', 0, {}));
        });
        it('Test 12: Should throw an Errror when third argument is bollean', () => {
            assert.throws(() => instance.calcPriceOfFlowers('a', 0, true));
        });
        it('Test 13: Should throw an Errror when first and seccond arguments are wrong', () => {
            assert.throws(() => instance.calcPriceOfFlowers(1, true, 0));
        });
        it('Test 14: Should throw an Errror when first and third arguments are wrong', () => {
            assert.throws(() => instance.calcPriceOfFlowers(1, 0, true));
        });
        it('Test 15: Should throw an Errror when seccond and third arguments are wrong', () => {
            assert.throws(() => instance.calcPriceOfFlowers('a', true, true));
        });
        it('Test 16: Should throw an Errror when all arguments are wrong', () => {
            assert.throws(() => instance.calcPriceOfFlowers(true, true, true));
        });
        it('Test 17: Should throw an Errror when second argument is double', () => {
            assert.throws(() => instance.calcPriceOfFlowers('a', 1.1, 0));
        });
        it('Test 18: Should throw an Errror when third argument is double', () => {
            assert.throws(() => instance.calcPriceOfFlowers('a', 0, 1.1));
        });
        it('Test 19: Should return correct string', () => {
            assert.equal(instance.calcPriceOfFlowers('Rose', 1, 1), 'You need $1.00 to buy Rose!');
        });
        it('Test 20: Should return correct string', () => {
            assert.equal(instance.calcPriceOfFlowers('Rose', 10, 10), 'You need $100.00 to buy Rose!');
        });
    });

    describe('Test metod checkFlowersAvailable', () => {
        it('Test 1: Should return correct string', () => {
            assert.equal(instance.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid']), 'The Rose are available!');
        });
        it('Test 2: Should return correct string', () => {
            assert.equal(instance.checkFlowersAvailable('Rose', ['Lily', 'Orchid']), 'The Rose are sold! You need to purchase more!');
        });
    });

    describe('Test metod sellFlowers', () => {
        it('Test 1: Should throw an Errror when first argument is number', () => {
            assert.throws(() => instance.sellFlowers(1, 0));
        });
        it('Test 2: Should throw an Errror when first argument is string', () => {
            assert.throws(() => instance.sellFlowers('a', 0));
        });
        it('Test 3: Should throw an Errror when first argument is object', () => {
            assert.throws(() => instance.sellFlowers({}, 0));
        });
        it('Test 4: Should throw an Errror when first argument is bollean', () => {
            assert.throws(() => instance.sellFlowers(true, 0));
        });
        it('Test 5: Should throw an Errror when second argument is string', () => {
            assert.throws(() => instance.sellFlowers([], 'b'));
        });
        it('Test 6: Should throw an Errror when second argument is array', () => {
            assert.throws(() => instance.sellFlowers([], []));
        });
        it('Test 7: Should throw an Errror when second argument is object', () => {
            assert.throws(() => instance.sellFlowers([], {}));
        });
        it('Test 8: Should throw an Errror when second argument is bollean', () => {
            assert.throws(() => instance.sellFlowers([], true));
        });
        it('Test 9: Should throw an Errror when all argumenta is wrong', () => {
            assert.throws(() => instance.sellFlowers(true, true));
        });
        it('Test 10: Should return a correct string', () => {
            assert.equal(instance.sellFlowers(['Rose', 'Lily', 'Orchid'], 0), 'Lily / Orchid');
        });
        it('Test 11: Should return a correct string', () => {
            assert.equal(instance.sellFlowers(['Rose', 'Lily', 'Orchid'], 1), 'Rose / Orchid');
        });
        it('Test 12: Should return a correct string', () => {
            assert.equal(instance.sellFlowers(['Rose', 'Lily', 'Orchid'], 2), 'Rose / Lily');
        });
        it('Test 13: Should return a correct string', () => {
            assert.equal(instance.sellFlowers(['Rose'], 0), '');
        });
    });
});