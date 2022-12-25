const { rgbToHexColor } = require('./06. RGB to Hex');
const { assert } = require('chai');

describe('Test function rgb to correct output', () => {
    it('Convert to black', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
    });
    it('Convert to white', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });
    it('The output color is different', () => {
        assert.notEqual(rgbToHexColor(0, 0, 0), '#111111');
    });
    it('The output is different', () => {
        assert.notEqual(rgbToHexColor(15, 15, 15), '#FFF');
    });
    it('Return undefined for missing params', () => {
        assert.isUndefined(rgbToHexColor(0, 0), undefined);
        assert.isUndefined(rgbToHexColor(0), undefined);
        assert.isUndefined(rgbToHexColor(), undefined);
    });
    it('Return undefined for out of lower bound', () => {
        assert.isUndefined(rgbToHexColor(-1, 0, 0), undefined);
        assert.isUndefined(rgbToHexColor(0, -1, 0), undefined);
        assert.isUndefined(rgbToHexColor(0, 0, -1), undefined);
    });
    it('Return undefined for out of upper bound', () => {
        assert.isUndefined(rgbToHexColor(256, 0, 0), undefined);
        assert.isUndefined(rgbToHexColor(0, 256, 0), undefined);
        assert.isUndefined(rgbToHexColor(0, 0, 256), undefined);
    });
});
