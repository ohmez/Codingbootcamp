var orm = require("./config/orm.js");

var data = orm.selectWhere("parties", "party_type", "grown-up", function(err, data) {
    console.log(data);
});

console.log(data); // Data is undefined. Why?
