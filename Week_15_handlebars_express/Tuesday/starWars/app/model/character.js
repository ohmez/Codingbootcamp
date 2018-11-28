var Sequelize = require('Sequelize');
var sequelize = require('../config/connection.js');

var Character = sequelize.define({
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forecePoints: Sequelize.INTEGER

});

Character.sync();

module.exports = Character;