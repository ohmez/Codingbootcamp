var fs = require('fs');

fs.readFile("best_things_ever.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
   data = data.split(",");
  
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
  
  
