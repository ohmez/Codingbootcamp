// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
// var orm = require("../config/orm.js");
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    db.todo.findAll({}).then(function(results) {
      return res.json(results);
    })
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    db.todo.create({
      text: req.body.text
    }).then(function(results) {
      return res.json(results);
    })
   
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
   db.todo.destroy({
     where: {
       id: req.params.id
     }
   }).then(function (results) {
     return res.json(results)
   }).catch(function(error) {
     return res.json(error);
   })
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function(req, res) {
    console.log(req.body);
   db.todo.update({
     text: req.body.text,
     complete: req.body.complete
   },{
     where: {
       id: req.body.id
     }
   }).then(function(results) {
     return res.json(results);
   })
  });
};
