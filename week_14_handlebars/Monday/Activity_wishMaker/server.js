var express = require("express");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "wish_maker_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get('/',(req,res) => {
    connection.query("SELECT * FROM wishes;",  (err,data) => {
        if(err) throw err;
        res.render('index', {wishes: data} )
    });
});



// Post route -> back to home
app.post("/", function(req, res) {
    // Test it
    console.log('You sent, ' + req.body.wish);

    connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function (err, result) {
        if (err) throw err;
        console.log(req.body);
        res.redirect("/");
    });
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
