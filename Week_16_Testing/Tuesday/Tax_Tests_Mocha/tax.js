var calculateTax = function(price) {
  var tax = 1.08;
  // Fill in code here
  if(typeof price !== "number" ) {
   throw new Error('price must be number');
  } else return price * tax;
};

module.exports = calculateTax;
