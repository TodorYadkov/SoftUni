const { createCalculator } = require('./07. Add Subtract');
const { assert } = require('chai');

describe('Test createCalculator function', () => {
    let calculation;
    beforeEach(function () {
        calculation = createCalculator();
            });
    it("Should return 0 for get;", () => {
        assert.equal(calculation.get(), 0);
    });
    it('Should return 2 after add(1); add(1);', () => {
        calculation.add(1);
        calculation.add(1);
        assert.equal(calculation.get(), 2);
    });
    it('Should return -2 after subtract(1); subtract(1);', () => {
        calculation.subtract(1);
        calculation.subtract(1);
        assert.equal(calculation.get(), -2);
    });
    it('Should return 0 after add(1); subtract(1);', () => {
        calculation.add(1);
        calculation.subtract(1);
        assert.equal(calculation.get(), 0);
    });
    it('Should return 3.3 after add(1.1); add(2.2);', () => {
        calculation.add(1.1);
        calculation.add(2.2);
        assert.equal(calculation.get(), (1.1 + 2.2));
    });
    it('Should return 0 after add(1.1); subtract(1.1);', () => {
        calculation.add(1.1);
        calculation.subtract(1.1);
        assert.equal(calculation.get(), (1.1 - 1.1));
    });
    it('Should return NaN with string add(\'test\');', () => {
        calculation.add('a');
        assert.isNaN(calculation.get())
    });
    it('Should return NaN with string subtract(\'test\');', () => {
        calculation.subtract('a');
        assert.isNaN(calculation.get())
    });
});


















































// describe("createCalculator()", function () {
//     let calc;
//     beforeEach(function () {
//         calc = createCalculator();
//     });
//     it("should return 0 for get;", function () {
//         let value = calc.get();
//         expect(value).to.be.equal(0);
//     });
//     it("should return 5 after add(2); add(3);", function () {
//         calc.add(2);
//         calc.add(3);
//         let value = calc.get();
//         expect(value).to.be.equal(5);
//     });
//     it("shoul return -5 after subtract(3); subtract(2)", function () {
//         calc.subtract(3);
//         calc.subtract(2);
//         let value = calc.get();
//         expect(value).to.be.equal(-5);
//     });
//     it("should return 4.2 after add(5.3); subtract(1.1);", function () {
//         calc.add(5.3);
//         calc.subtract(1.1);
//         let value = calc.get();
//         expect(value).to.be.equal(5.3 - 1.1);
//     });
//     it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", function () {
//         calc.add(10);
//         calc.subtract('7');
//         calc.add('-2');
//         calc.subtract(-1);
//         let value = calc.get();
//         expect(value).to.be.equal(2);
//     });
//     it("should return NaN for add(string)", function () {
//         calc.add('hello');
//         let value = calc.get();
//         expect(value).to.be.NaN;
//     });
//     it("should return NanN for subtarct(string)", function () {
//         calc.subtract('hello');
//         let value = calc.get();
//         expect(value).to.be.NaN;
//     });
// });