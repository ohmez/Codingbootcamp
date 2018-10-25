var fs = require('fs');
var transation = process.argv[2];
var amount = process.argv[3];
function Fs (transaction, amount) {
Fs.total = fs.readFile("bank.txt","utf8", function(err,data) {
if (err) {
return console.log(err);} else {
var total = 0;
data = data.split(',');
for(x = 0; x < data.length; x++) {
total += data[x];
} console.log(total); // end for loop
} // end else
});// end fs.total



};// end Fs Function/object


// rebuild switch only below, hopefullly call to functions using object/function calls. 
switch(transaction) {
case "total":
fs.readFile("bank.txt", "utf8", function (err,data) {
if(err) {
return console.log(err);
} else {
data = data.spit(',');
var total = 0;
for(x = 0; x < data.length; x++) {
total += data[x];
} // end for loop
}// end else statment
});// end readfile function
break;
case "deposit": 
fs.appendFile("bank.txt",amount, function (err) {
if(err) {
 return console.log(err);} else {
 }
});
}// end switch function
};
