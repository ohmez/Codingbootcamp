// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get('/api/all',(req,res) =>{
    var sqQuery = 'SELECT * FROM chirps';
    connection.query(sqQuery, (err,res) => {
      if(err) throw err;
      res.json(res);
    });
  });


  // Add a chirp
  app.post('/api/new', (req,res) => {
    console.log('chirp data:');
    console.log(req.body);
    var sqQuery = 'INSERT INTO chrips (author, chirp, created) VALUES (?,?,?)';
    connection.query(sqQuery, [req.body.author, req.body.chirp, req.body.created], (err,res) => {
      
    })
  })

};
