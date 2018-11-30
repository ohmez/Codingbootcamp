// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var mysql = require("mysql");
var Sequelize = require('Sequelize');
var sequelize = new Sequelize('starwars','root','password',{
  host: 'localhost',
});

module.exports = sequelize;
