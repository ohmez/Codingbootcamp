var game = require('./tamagotchi.js');
var pet = process.argv[2];
var action = process.argv[3];

switch(pet) {
    case 'dog': 
    game.dog.bark();
    break;
}