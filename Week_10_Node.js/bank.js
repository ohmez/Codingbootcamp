var fs = require('fs');
var transation = process.argv[2];
var amount = process.argv[3];
var bank = "bank.txt";
var format = "utf8";

switch(transation) {
    case "withdraw":
    withdraw();
    break;
    case "deposit":
    deposit();
    break;
    case "total":
    total();
    break;
    case "lotto":
    lotto();
    break;

}

function withdraw() {
    fs.appendFile(bank, ", "+ (-amount), (err) => {
        if(err) throw err;
        console.log("Withdrew " + amount +" into account");
    })
};
function deposit() {
    fs.appendFile(bank, ", "+ amount, (err) => {
        if(err) throw err;
        console.log("deposited " + amount +" into account");
    })
};
function total() {
    var total = 0;
    fs.readFile(bank,format, (err,data) => {
        if(err) throw err;
        data = data.split(',');
        for (x=0; x < data.length; x++) {
            // total = total + parseInt(data[x]);
            total += parseFloat(data[x]);
            parseInt(data[x]);
            console.log(x + ": "+ parseFloat(data[x]));
        }
        console.log("your account balance is " + parseFloat(total).toFixed(2));
    })
};
