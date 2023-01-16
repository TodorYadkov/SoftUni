const { Repository } = require('./02. Repository.js');
const { assert } = require('chai');

describe('Test class Repository', () => {
    let instance;
    const entity = {
        name: 'John',
        age: 23,
        birthday: new Date(2000, 0, 1),
    };
    beforeEach(() => instance = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object',
    }));

    describe('Test count prop', () => {
        it('Should return count is 0', () => {
            assert.equal(instance.count, 0);
        });
    });
    
    describe('Test method add', () => {
        it('Test 1: Should return correct new id', () => {
            assert.equal(instance.add(entity), 0);
            assert.equal(instance.add({ name: 'Jack', age: 20, birthday: new Date(2003, 0, 1) }), 1);
            assert.equal(instance.add({ name: 'Annie', age: 30, birthday: new Date(1993, 0, 1) }), 2);
        });
        it('Test 2: Should return an Error with an incorrect type of the first property', () => {
            assert.throws(() => instance.add({ name: [], age: 20, birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.add({ name: {}, age: 20, birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.add({ name: true, age: 20, birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.add({ name: 1, age: 20, birthday: new Date(2003, 0, 1) }));
        });
        it('Test 3: Should return an Error with an incorrect type of the second property', () => {
            assert.throws(() => instance.add({ name: 'John', age: 'abc', birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.add({ name: 'John', age: [], birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.add({ name: 'John', age: {}, birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.add({ name: 'John', age: true, birthday: new Date(2003, 0, 1) }));
        });
        it('Test 4: Should return an Error with an incorrect type of the third property', () => {
            assert.throws(() => instance.add({ name: 'John', age: 20, birthday: 'abc' }));
            assert.throws(() => instance.add({ name: 'John', age: 20, birthday: 1 }));
            assert.throws(() => instance.add({ name: 'John', age: 20, birthday: true }));
        });
        it('Test 5: Should return an Error with an incorrect first property name', () => {
            assert.throws(() => instance.add({ n: 'John', age: 20, birthday: new Date(2003, 0, 1) }));
        });
        it('Test 6: Should return an Error with an incorrect second property name', () => {
            assert.throws(() => instance.add({ name: 'John', a: 'abc', birthday: new Date(2003, 0, 1) }));
        });
        it('Test 7: Should return an Error with an incorrect third property name', () => {
            assert.throws(() => instance.add({ name: 'John', age: 20, b: new Date(2003, 0, 1) }));
        });
    });

    describe('Test method getId', () => {
        it('Test 1: Should throw an Error with incorect Id', () => {
            assert.throws(() => instance.getId(0), 'Entity with id: 0 does not exist!');
            assert.throws(() => instance.getId(1), 'Entity with id: 1 does not exist!');
        });
        it('Test 2: Should return correct entity', () => {
            instance.add(entity);
            instance.add({ name: 'Jack', age: 20, birthday: new Date(2003, 0, 1) });
            instance.add({ name: 'Annie', age: 30, birthday: new Date(1993, 0, 1) });

            assert.deepEqual(instance.getId(0), entity);
            assert.deepEqual(instance.getId(1), { name: 'Jack', age: 20, birthday: new Date(2003, 0, 1) });
            assert.deepEqual(instance.getId(2), { name: 'Annie', age: 30, birthday: new Date(1993, 0, 1) });
        });
    });

    describe('Test method update', () => {
        it('Test 1: Should throw an Error with incorrect Id', () => {
            assert.throws(() => instance.update(0, entity), 'Entity with id: 0 does not exist!');
            // Add a new entity at ID 0 and check if an entity at ID 1 exists
            instance.add(entity);
            assert.throws(() => instance.update(1, entity));
        });
        it('Test 2: Should return an Error with an incorrect type of the first property', () => {
            instance.add(entity);
            assert.throws(() => instance.update(0, { name: [], age: 20, birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.update(0, { name: {}, age: 20, birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.update(0, { name: true, age: 20, birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.update(0, { name: 1, age: 20, birthday: new Date(2003, 0, 1) }));
        });
        it('Test 3: Should return an Error with an incorrect type of the second property', () => {
            instance.add(entity);
            assert.throws(() => instance.update(0, { name: 'John', age: 'abc', birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.update(0, { name: 'John', age: [], birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.update(0, { name: 'John', age: {}, birthday: new Date(2003, 0, 1) }));
            assert.throws(() => instance.update(0, { name: 'John', age: true, birthday: new Date(2003, 0, 1) }));
        });
        it('Test 4: Should return an Error with an incorrect type of the third property', () => {
            instance.add(entity);
            assert.throws(() => instance.update(0, { name: 'John', age: 20, birthday: 'abc' }));
            assert.throws(() => instance.update(0, { name: 'John', age: 20, birthday: 1 }));
            assert.throws(() => instance.update(0, { name: 'John', age: 20, birthday: true }));
        });
        it('Test 5: Should return an Error with an incorrect first property name', () => {
            instance.add(entity);
            assert.throws(() => instance.update(0, { n: 'John', age: 20, birthday: new Date(2003, 0, 1) }));
        });
        it('Test 6: Should return an Error with an incorrect second property name', () => {
            instance.add(entity);
            assert.throws(() => instance.update(0, { name: 'John', a: 'abc', birthday: new Date(2003, 0, 1) }));
        });
        it('Test 7: Should return an Error with an incorrect third property name', () => {
            instance.add(entity);
            assert.throws(() => instance.update(0, { name: 'John', age: 20, b: new Date(2003, 0, 1) }));
        });
        it('Test 8: Should return a correct a new updated entity', () => {
            // Add new entity
            instance.add(entity);
            // Update entity
            instance.update(0, { name: 'Jack', age: 50, birthday: new Date(1973, 0, 1) });
            assert.deepEqual({ name: 'Jack', age: 50, birthday: new Date(1973, 0, 1) }, instance.getId(0));
        });
    });

    describe('Test method del', () => {
        it('Test 1: Should throw an Error with incorrect Id', () => {
            assert.throws(() => instance.del(0));
            // Add a new entity at ID 0 and check if an entity at ID 1 exists to delete
            assert.throws(() => instance.del(-1), 'Entity with id: -1 does not exist!');
            instance.add(entity);
            assert.throws(() => instance.del(1), 'Entity with id: 1 does not exist!');
        });
        it('Test 2: Should not exist element on index 1', () => {
            instance.add(entity);
            instance.add(entity);
            instance.del(1);
            assert.equal(instance.data.has(1), false);
        });
    });
});