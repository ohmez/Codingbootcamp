var fs = require('fs');
var file = "best_things_ever.txt";
var format = "utf8";
var action = process.argv[2];
var newBest = process.argv[3];

function Fs () {
  
  Fs.readFile = fs.readFile(file, format, function(err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.split(",");
    
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    } // end for loop
  }); // end readfile
  Fs.append = fs.appendFile(file, newBest, function(err) {
    if (err) {
    return console.log(err);
    }
    Fs.readFile();
  });// end append
};// end Fs function

if (action == 'read') {
  fs.readFile();
}
 
