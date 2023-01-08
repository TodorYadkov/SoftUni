const { ChristmasMovies } = require('./02. Christmas Movies');
const { assert } = require('chai');

describe('Test ChristmasMovies class', () => {
    let testObj;
    beforeEach(() => testObj = new ChristmasMovies());
    describe('Test initial value', () => {
        it('Test 1:Instantiation with no parameters', () => {
            assert.deepEqual(testObj.movieCollection, []);
            assert.deepEqual(testObj.watched, {});
            assert.deepEqual(testObj.actors, []);
        });
    });

    describe('Test method buyMovie', () => {
        it('Test 1: Should return correct string', () => {
            assert.equal(testObj.buyMovie('Matrix', ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']), 'You just got Matrix to your collection in which Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss are taking part!');
        });
        it('Test 2: Should throw an Error when we have the same movie in our collection', () => {
            testObj.buyMovie('Matrix', ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']);
            assert.throws(() => testObj.buyMovie('Matrix', ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']), 'You already own Matrix in your collection!');
        });
        it('Test 3: Should return only unique actors', () => {
            assert.equal(testObj.buyMovie('Matrix', ['Keanu Reeves', 'Keanu Reeves', 'Laurence Fishburne', 'Laurence Fishburne', 'Carrie-Anne Moss', 'Carrie-Anne Moss']), 'You just got Matrix to your collection in which Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss are taking part!');
        });
    });

    describe('Test method discardMovie', () => {
        it('Test 1: Should throw an error when the movie is not in our collection', () => {
            assert.throws(() => testObj.discardMovie('Matrix'), 'Matrix is not at your collection!');
        });
        it('Test 2: Should throw an error when we have the movie but it not been watched', () => {
            testObj.buyMovie('Matrix', ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']);
            assert.throws(() => testObj.discardMovie('Matrix'), 'Matrix is not watched!');
        });
        it('Test 3: Should return correct string if the movie is in our collection', () => {
            testObj.buyMovie('Matrix', ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']);
            testObj.watchMovie('Matrix');
            assert.equal(testObj.discardMovie('Matrix'), 'You just threw away Matrix!');
        });
    });

    describe('Test method watchMovie', () => {
        it('Test 1: Should throw an error when the movie is not in our collection', () => {
            assert.throws(() => testObj.watchMovie('Matrix'), 'No such movie in your collection!');
        });
        it('Test 2: Should increment the counter', () => {
            testObj.buyMovie('Matrix', ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']);
            testObj.watchMovie('Matrix');
            testObj.watchMovie('Matrix');
            testObj.watchMovie('Matrix');
            assert.equal(testObj.watched['Matrix'], 3);
        });
        it('Test 3: Should add the movie in watched object', () => {
            testObj.buyMovie('Matrix', ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']);
            testObj.watchMovie('Matrix');
            assert.equal(testObj.watched.Matrix, 1);
        });

    });

    describe('Test method favouriteMovie', () => {
        it('Test 1: Should throw an error when the object is empty', () => {
            assert.throws(() => testObj.favouriteMovie(), 'You have not watched a movie yet this year!');
        });
        it('Test 2: Should return correct movie', () => {
            testObj.buyMovie('Matrix', ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss']);
            testObj.buyMovie('Terminator', ['Arnold Schwarzenegger', 'Linda Hamilton', 'Michael Biehn']);
            testObj.watchMovie('Matrix');
            testObj.watchMovie('Matrix');
            testObj.watchMovie('Matrix');
            testObj.watchMovie('Terminator');
            assert.equal(testObj.favouriteMovie(), 'Your favourite movie is Matrix and you have watched it 3 times!');
        });
    });

    describe('Test method mostStarredActors', () => {
        it('Test 1: Should throw an error when movieCollection is empty', () => {
            assert.throws(() => testObj.mostStarredActor(), 'You have not watched a movie yet this year!');
        });
        it('Test 2: Should return correct string', () => {
            testObj.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            testObj.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            testObj.buyMovie('Home Alone 3', ['Macaulay Culkin', 'Emma Thompson']);
            testObj.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby']);
            testObj.watchMovie('Home Alone');
            assert.equal(testObj.mostStarredActor(), 'The most starred actor is Macaulay Culkin and starred in 3 movies!');
        });
    });
});