## Start class
Creating a node app. 
using TV maze .com - no key needed.
node cli actor|show 

### Part-One-Architecht
```
establish npms
create variables for process.argv[x]
splice and stringify values provided as needed
input user commands into functions and request from the api's.
create log function to write to file and write all results to the file.
then create function to callback the file and read the data and console log it.
since the results cascade and all show everytime you do a command you'll want to console log to be from reading the file.
this will require a then promise so that way we wait until the file is written to read the results. 
```

### Part-Two-CLI
this is basically just a switch listening to the process.argv's.
you must set it up to require another javascript sheet to //dostuff.
so you'll need npm `request()`.

```js 
switch(command) {
    case 'show': 
    //dostuff
    break;
    case 'actor':
    //dostuff
    break;
    default:
    console.log('available commands (show) (actor)');
}
```

### Part-Three-Search
Here we're creating the `tv.js` file.
this is a construct function 
```js
var TV = function () {
    this.findShow = function(query) {
        //do stuff function using request to search api url.     
    };
module.exprts = new TV;
```
We ran into some issues going through this because we didn't call `new` for the constructor.
Constructs MUST have a new in order to work. Since the variable itself doesn't actually contain anything until a new one is made.
this.key doesn't exist until this is created. 
This is very tricky to explain but it makes a lot of sense and is almost like a law, you have to follow it, doesn't matter if you like it. 
I wonder if below would work to create itself without calling new TV(); 
```js
var TV = function () {
    new this;
    this.findShow = function(query) {
        //do stuff function using request to search api url.     
    };
```
Tested my theory and no alternative of new this or new TV() as a nested part of itself. 

### Call-Backs
```js
function callMeMaybe(message, cb) {
    var coinflip = Math.floor(Math.random() *2);
    if (coinflip === 1) {
        cb(message);
    } else {
        cb('no');
    }
};
callmeMaybe('Hello'); 
```
this cb function isn't specifying what to do since it isn't a function but that's where callbacks go in the paramaters, last seems like best place.
Don't think its required though. 
```js
callMeMaybe('hello', function(message) {
    console.log(message); 
})
```
This will make the provided message log if the coinflip equals 1. 
This is useless for this case but it makes sense with how you can compound functions on top of functions.
Lets say callMeMaybe's CB was a function that determined who to call or who was calling so it could pull from the providing initator. 
The example above didn't work exactly as I expected, looping through the callbacks while holding the first message variable didn't work well for me.

In the examples we went over callbacks using anonymous functions.
This worked but while I was trying to use callbacks with defined functions I had issues.
`cb();` Didn't  seem to work if the `cb()` in refernce had predefined paramaters `cb(any,any)` didn't work either.
Not really sure about how applicable it is to use this deep of callbacks without being able to call to named functions.
I hope we go over this more in depth. 


Functional programming is where you can keep passing in paramaters and functions to only write a single line of code.
pre make functions then callthem in this type of callback system. 
[5,2].map() <<< something with this is where callbacks are important.
constructors and callbacks are next level coding.
Understanding all of this to its deepest levels would really allow you to build some great stuff. 


