const { bookSelection } = require('./solution');
const { assert } = require('chai');

describe('Test the object bookSelection', () => {
  let testBook;
  beforeEach(() => {
    testBook = bookSelection;
  });
  describe('Test method isGenreSuitable', () => {
    it('Test 1: Should return that the genre is suitable', () => {
      assert.equal(testBook.isGenreSuitable('Kids book', 1), 'Those books are suitable');
      assert.equal(testBook.isGenreSuitable('Kids book', 13), 'Those books are suitable');
      assert.equal(testBook.isGenreSuitable('Thriller', 13), 'Those books are suitable');
      assert.equal(testBook.isGenreSuitable('Horror', 13), 'Those books are suitable');
    });

    it('Test 2: Should return that the genre Thriller is not suitable for kids', () => {
      let genre = 'Thriller';
      let age = 12;
      assert.equal(testBook.isGenreSuitable(genre, age), `Books with ${genre} genre are not suitable for kids at ${age} age`);
      age = 1;
      assert.equal(testBook.isGenreSuitable(genre, age), `Books with ${genre} genre are not suitable for kids at ${age} age`);
    });

    it('Test 3: Should return that the genre Horror is not suitable for kids', () => {
      let genre = 'Horror';
      let age = 12;
      assert.equal(testBook.isGenreSuitable(genre, age), `Books with ${genre} genre are not suitable for kids at ${age} age`);
      age = 1;
      assert.equal(testBook.isGenreSuitable(genre, age), `Books with ${genre} genre are not suitable for kids at ${age} age`);
    });
  });

  describe('Test method isItAffordable', () => {
    it('Test 1: Validate input if not a number throw an error', () => {
      assert.throws(() => { testBook.isItAffordable('abc', 1); }, 'Invalid input');
      assert.throws(() => { testBook.isItAffordable(1, 'abc'); }, 'Invalid input');
    });

    it('Test 2: Sholud return you can buy the book', () => {
      assert.equal(testBook.isItAffordable(1, 1), 'Book bought. You have 0$ left');
      assert.equal(testBook.isItAffordable(1.5, 2), 'Book bought. You have 0.5$ left');
      assert.equal(testBook.isItAffordable(100, 200), 'Book bought. You have 100$ left');
    });

    it('Test 3: Sholud return you can\'t buy the book', () => {
      assert.equal(testBook.isItAffordable(1, 0), 'You don\'t have enough money');
      assert.equal(testBook.isItAffordable(1.5, 1), 'You don\'t have enough money');
      assert.equal(testBook.isItAffordable(150, 100), 'You don\'t have enough money');
    });
  });

  describe('Test method suitableTitle', () => {
    it('Test 1: Validate input if is not a correct throw an error', () => {
      assert.throws(() => { testBook.suitableTitles('mustBeArray', 'Correct'); });
      assert.throws(() => { testBook.suitableTitles(['Correct'], ['mustBeAString']); });
    });
    it('Test 2: Should add the title in correct genre and return correct array', () => {
      assert.isArray(testBook.suitableTitles([{ genre: 'Thriller' }], 'The Da Vinci Code'));
      assert.includeDeepMembers([{ title: 'The Da Vinci Code', genre: 'Thriller' }], testBook.suitableTitles([{ genre: 'Thriller' }], 'The Da Vinci Code'));
    });
  });
});