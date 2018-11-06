
var command = process.argv[2];
var query = process.argv.splice(3).join("+");
var TV = require('./tv.js');
// var tv = new TV();


switch(command) {
    case 'show':
    console.log('searching for show: ' + query.split("+").join(" "));
    TV.findShow(query);
    //searrch show function;
    break;
    case 'actor':
    console.log('searching for actor: ' + query.split("+").join(" "));
    TV.findActor(query);
    //search actor function;
    break;

}

