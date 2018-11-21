var orm = require("./config/orm.js");

orm.selectAllParties(function(err,data) {
    console.log(data);
});
orm.selectAllClients(function(err,data) {
    console.log(data);
});
orm.selectWhere('parties', 'party_type', 'grown-up', (err,data) => {
    console.log('\n');
    console.log(data);
}) 