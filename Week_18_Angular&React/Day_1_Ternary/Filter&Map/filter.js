const originalArray = [1, 3, 2, 5, 10, 7];

const evenNumbers = originalArray.filter(function(data) {
  if (data % 2 === 0) {
    return true;
  }
});

console.log(evenNumbers);
console.log(originalArray);

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== true;
};
console.log(isPrime(4), '\n'+'now a prime',isPrime(7));
// Complete the following

// 1. A filter that runs through the original array and creates a new array containing only its prime numbers (`primeArray`)
// Use the isPrime function provided to help with this
// const primeArr = originalArray.filter((data) => {
//   if(isPrime(data)) {
//     return true;
//   }
// });
const primeArr = originalArray.filter(data => isPrime(data)? true:false);
console.log(primeArr);

// 2. A filter that runs through the original array and creates a new array containing only its numbers larger than 5(`moreThan5Array`)
const moreThan5Arr = originalArray.filter(data => data>=5?true:false);
console.log(moreThan5Arr);

// Your code here

// Bonus: Use arrow functions as callbacks!
