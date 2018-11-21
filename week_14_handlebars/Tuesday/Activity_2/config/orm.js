var connection = require("../config/connection.js");

var orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol, callback) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        return callback(err, result);
      });
    },
    selectAllParties: function(callback) {
        var queryString = "SELECT * FROM parties";
    
      connection.query(queryString, (err,res) => {
          if(err) throw err;
          return callback(err,res);
      });
    },
    selectAllClients: function(callback) {
        var queryString = "SELECT * FROM clients";
    
      connection.query(queryString, (err,res) => {
          if(err) throw err;
          return callback(err,res);
      });
    }
};
  
  module.exports = orm;

  