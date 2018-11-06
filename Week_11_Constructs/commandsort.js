var numbers = process.argv;

var numbersArr = [];
for (var x=2; x<numbers.length; x++) {
    numbersArr.push(parseFloat(numbers[x]));
}
console.log(numbersArr);
numbersArr = numbersArr.sort((a,b) => a-b);
console.log(numbersArr);



