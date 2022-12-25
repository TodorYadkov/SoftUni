const { lookupChar } = require('./03. Char Lookup');
const { assert } = require('chai');

describe('Test lookupChar function', () => {
    it('Should return \'e\' lookupChar(\'Hello\',1)', () => {
        assert.equal(lookupChar('Hello', 1), 'e');
    });
    it('Should return undefined with non string', () => {
        assert.isUndefined(lookupChar(1, 1));
    });
    it('Should return undefined with non integer number', () => {
        assert.isUndefined(lookupChar('Hello', 1.1));
    });
    it('Should return Incorrect index with index greater than stringh length or lower', () => {
        assert.equal(lookupChar('Hello', 10), 'Incorrect index');
        assert.equal(lookupChar('Hello', -10), 'Incorrect index');
    });
});