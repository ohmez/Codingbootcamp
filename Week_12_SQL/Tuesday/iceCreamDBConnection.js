var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  findLowInventory();
  addNewItem('rockyroad', 3.25,200);
  afterConnection();
  connection.end();
});

function afterConnection() {
connection.query("SELECT * FROM products", (err,result) => {
  if(err) throw err; 
  console.log(result);
})
};

function findLowInventory() {
  connection.query("SELECT * FROM products WHERE quantity <= 30 ", (err,results) => {
    if(err) throw err;
    console.log('you need to order more of: ');
    console.log(results);
  })
};

function addNewItem(flav, price, quantity) {
  connection.query("INSERT INTO products (flavor, price, quantity) VALUES ("+flav+","+price+","+quantity+")", (err,result) => {
    if(err) throw err;
    function (err, result) {}
    console.log('item added: ');
  })
};