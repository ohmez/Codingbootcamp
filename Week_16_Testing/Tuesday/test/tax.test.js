var expect = require("chai").expect;
var calculateTax = require("./tax");

// Write tests for the calculateTax function here
describe('calculateTax', () => {
    interface('should calc tax', () => {
        var result = calculateTax(4);
        expect(result).to.equal(4.32)
    });
});
