var express = require('express');
var mysql = require('mysql');
var PORT = process.env.PORT || 3000;
var app = express();
var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: 'root',
    password: 'Wh0v1@n',
    database: 'wizzardry_db'
});
app.listen(PORT,(err) => {
    if(err) throw err;
    console.log('listening on ' +PORT);
});
connection.connect((err)=>{
    if (err) throw err;
    console.log('connected on to database');
});


app.get("",(req,res) => {
    var sqlQ = 'SELECT * FROM schools'
    connection.query(sqlQ,(err,results) => {
        if(err) throw err;
        console.log(results);
        var myHtml = '<h1> Welcome to The Wonderful World of Wizzardry</h1>';
            myHtml += '<ul>';
        for (x=0; x<results.length; x++) {
            myHtml += "<li><p> Ranking#: " + results[x].ID +'<br>';
            myHtml += "<br>School: " + results[x].name + '</p></li>';
        }
        myHtml += '</ul>';
        res.send(myHtml);
    })
    
})



