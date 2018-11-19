var fs = require('fs');
var file = process.argv[2];
var format = "utf8";
var newBest = ", " + process.argv[3];

// fs.readFile(file, function(err,data) {
// if(err) {console.log(err);} else { var dataArr = data.split(","); console.log(dataArr);}
// });
if (!process.argv[3]) {
fs.readFile(file, format, (err,data) => {
    if(err) throw err;
    console.log(data);
})
}// end if no param given only read 
if (process.argv[3]) {
    if (process.argv[3] == 'split') {
        fs.readFile(file,format,(err,data) => {
            if(err) throw err; 
            data = data.split(',');
            for(x=0; x < data.length; x++) {
                console.log(data[x]);
            }// end for loop
            });// end readFile function

    } else {
fs.appendFile(file, newBest, function(err) {
    if (err) {
    return console.log(err);
    }
    fs.readFile(file, format,(err,data) => {
        if(err) throw err;
        console.log(data);
    }); // end readfile after append. 
  });// end append function
}// end else
}// end if adding content. 

if(process.argv[4] == 'split') {
fs.readFile(file,format,(err,data) => {
if(err) throw err; 
data = data.split(',');
for(x=0; x < data.length; x++) {
    console.log(data[x]);
}// end for loop
});// end readFile function
}// end if split 