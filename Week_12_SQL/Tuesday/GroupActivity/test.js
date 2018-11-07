var mysql = require('mysql')
var inquirer = require('inquirer')

var connection = mysql.createConnection ({

     host: "localhost",

     port: 3306,

     user: "root",

     password: "password",

     database: "greatBay_DB"

});

connection.connect(function (err, res) {
     if (err) throw err;
     start();
});

function start() {
     inquirer
     .prompt({
          name: "postOrBid",
          type: "rawlist",
          message: "Would you like to [POST] an auction or [BID] on an auction?",
          choices: ["POST", "BID"]
     })
     .then(function(answer) {
          if (answer.postOrBid.toUpperCase() === "POST") {
               postAuction();
          } else {
               bidAuction();
          }
     });
}

function postAuction() {
     inquirer
     .prompt ([
          {
               name: "item",
               type: "input",
               message: "Would item are you posting today?"
          },
          {
               name: "category",
               type: "input",
               message: "What category does your auction belong in?"
          },
          {
               name: "startingBid",
               type: "input",
               message: "What would you like to start the bidding at?",
               validate: function(value) {
                    if(isNaN (value) === false) {
                         return true;
                    }
                    return false;
               }
          }
     ])
     .then(function(answer) {
          connection.query(
               {
                    item_name: answer.item,
                    category: answer.category,
                    starting_bid: answer.starting_bid,
                    highest_bid: answer.highest_bid
               },
               function(err) {
                    if (err) throw err;
                    console.log("Your Auction Has Been Created Successfully!");
                    start();
               }
          );
     });
}

function bidAuction() {
     connection.query("SELECT * FROM auctions", function(err, res) {
          if(err) throw err;
          res = JSON.stringify(res,null,2);
          results = JSON.parse(res);
          inquirer
          .prompt([
               {
                    name: "choice",
                    type: "rawlist",
                    choices: function() {
                         var choiceArray = [];
                         for (var x = 0; x < results.length; x++){
                              choiceArray.push(results[x].item_name);
                         }
                         return choiceArray;
                    },
                    message: "What Auction Would You Like to Bid On?"
               },
          ])
     })
}