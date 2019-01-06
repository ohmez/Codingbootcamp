const originalArray = [1, 3, 2, 5, 10,4];

const doubledArray = originalArray.map(function(data) {
  return data * 2;
});

console.log(originalArray,' original ');
console.log(doubledArray,' doubled');

// Complete the following

// 1. A map that triples the originalArray and sets the result equal to a new `tripledArray` array

// 2. A map that takes the originalArray and returns a new array `oddOrEven`
// containing the text "even" if the number is even and the text "odd" if the number is odd
// i.e. using this map, the array [3, 1, 2, 4] should give us back ["odd", "odd", "even", "even"]

// Your code here
//1 + bonus
const trippledArray = originalArray.map(data => data *3);
console.log(trippledArray,' trippled');
//2 + bonus
const oddOrEven = originalArray.map(data => data%2===0?'even':'odd');
console.log(oddOrEven, 'odd or even');

// Bonus: Use arrow functions as callbacks!
