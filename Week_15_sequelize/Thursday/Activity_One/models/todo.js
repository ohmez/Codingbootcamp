// var Sequelize = require('sequelize');
// var sequelize = require('../config/config.json');

// var TodoItem = sequelize.define('todo', {
//     text: DataTypes.STRING,
//     complete: DataTypes.BOOLEAN
// }, {
//     freezeTableName: true
// });

// TodoItem.sync();

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('todo', {
        text: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [2,140],
                }
            },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
            }
    }, {
        freezeTableName: true
    });
};
