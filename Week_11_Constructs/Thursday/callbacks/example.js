var fs = require('fs');

function toConsole(message) {
    console.log(message);
}; // end console 
toConsole('hello world');

function log(message,cb) {
    fs.appendFile('log.txt', '\n'+message, (err) => {
        if(err) throw err;
    });
    return cb(message);
    
}; // end log

log(' This works ', function (message) {
    console.log(message);
});
log(' But this doesnt ', toConsole);


// I'd like to understand why the annonymous function works 
// but the named function doesn't, they both take in parameter message..
// they both only console.log(message);