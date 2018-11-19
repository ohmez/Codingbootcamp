var fs = require('fs');
var file = process.argv[2];
var format = "utf8";
var content =  process.argv[3];
fs.writeFile(file, content, (err) => {
   if(err) throw err;
});
