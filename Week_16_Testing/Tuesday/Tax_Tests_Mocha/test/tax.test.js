var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here
describe('calculateTax', () => {
    it('should calc tax', () => {
        var result = calculateTax(4);
        expect(result).to.equal(4.32)
    });
    it('Should calc tax on decimal', () => {
        var result = calculateTax(4.50);
        expect(result).to.equal(4.86);
    });
    it('should throw error if not number', () => {
        var call = () => { calculateTax('potato')};
        expect(call).to.throw(Error);
    });
});
