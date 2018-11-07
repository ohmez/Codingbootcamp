var Bid;
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'greatBay_DB'
});

function bid() {
    connection.connect(function(err) {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        connection.query('SELECT * FROM auctions', (err,resp) => {
            if(err) throw err;
            resp = JSON.stringify(resp,null,2);
            displayItems(resp);
        })
    })
};
function displayItems(response) {
    results = JSON.parse(response);
    var itemsArray = [];
    // console.log(results); 
    for(x=0; x<results.length; x++) {
        itemsArray.push({
        name: results[x].item_name,
        startBid: results[x].starting_bid,
        highestBid: results[x].highest_bid
        });
    }
    // console.log(itemsArray);
    return itemsArray;
};
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
                   type: "list",
                   choices: displayItems(res),
                   message: "What Auction Would You Like to Bid On?"
              },
         ])
    })
}

start();

