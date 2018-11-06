// # **Instructions**

// * In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.

// * Your "Programmer" constructor should be able to take in the following information...

//   * The programmer's name
//   * Their position/job title
//   * How old they are
//   * Favorite programming language

// * Now create a method for the constructor that would print all of the information contained within an object to the console.

// * Finally, create a "Programmer" object and call the method to print its contents
var inquirer = require('inquirer');

function  Programmer(name, title, age, fav) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.fav = fav;
    this.log = function () {
        console.log(this);
        var keys = Object.keys(this)
        console.log(this.keys);
        console.log(keys);
        for (x=0; x<keys.length; x++) {
            var y = JSON.parse(keys[x]);
            console.log(keys[x] + ': ' + this.y);
        }
    };
};
var keagan = new Programmer('keagan', 'boss.com', 26, 'Javascript for sure');
var john = new Programmer('john', 'boss jr', '25','css');
var programmersArr = [];

function asking() {
    inquirer.prompt([
        {type: 'input',
        message: 'What is your name?',
        name: 'name'
    }, {
        type: 'input',
        message: 'What is your job Title?',
        name: 'title'
    },{
        type: 'input',
        message: 'What is your age?',
        name: 'age'
    }, {
        type: 'input',
        message: 'Whats your favorite coding language?',
        name: 'fav'
    }]).then(answers => {
        var newProgrammer = new Programmer(answers.name, answers.title, answers.age, answers.fav);
        programmersArr.push(newProgrammer);
        console.log(programmersArr);
    })
};
asking();




