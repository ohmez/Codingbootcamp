var express = require('express');
var mysql = require('mysql');
var PORT = process.env.PORT || 3000;
var app = express();
var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: 'root',
    password: 'Wh0v1@n',
    database: 'seinfeld_db'
});
app.listen(PORT,(err) => {
    if(err) throw err;
    console.log('listening on ' +PORT);
});
connection.connect((err)=>{
    if (err) throw err;
    console.log('connected on to database');
});

app.get("/cast",(req,res) => {
    var sqlQ = 'SELECT * FROM actors'
    connection.query(sqlQ,(err,results) => {
        if(err) throw err;
        // console.log(results);
        var myHtml = '<h1> Welcome to The World of Seinfeld</h1>';
            myHtml += '<ul>';
        for (x=0; x<results.length; x++) {
            myHtml += "<li><p> Ranking#: " + results[x].ID +'<br>';
            myHtml += "<br>Name: " + results[x].name + '<br>';
            myHtml += 'Cool Points: ' +results[x].coolness_points +'<br>';
            myHtml += 'Attitude: ' + results[x].attitude +'</p></li>';
        }
        myHtml += '</ul>';
        res.send(myHtml);
    });
    
});
app.get("/coolness-chart",(req,res) => {
    var sqlQ = 'SELECT * FROM actors ORDER BY coolness_points DESC'
    connection.query(sqlQ,(err,results) => {
        if(err) throw err;
        var myHtml = '<h1> Welcome to The World of Seinfeld</h1>';
            myHtml += '<ul>';
        for (x=0; x<results.length; x++) {
            myHtml += "<li><p> Ranking# " + (x+1) +'<br>';
            myHtml += "<br>Name: " + results[x].name + '<br>';
            myHtml += 'Cool Points: ' +results[x].coolness_points +'<br>';
            myHtml += 'Attitude: ' + results[x].attitude +'</p></li>';
        }
        myHtml += '</ul>';
        res.send(myHtml);           
    });
    
});

app.get("/attitude-chart/:att",(req,res) => {
    var sqlQ = 'SELECT * FROM actors WHERE attitude = ?'
    connection.query(sqlQ,[req.params.att],(err,results) => {
        if(err) throw err;
        var myHtml = '<h1> Welcome to The World of Seinfeld</h1>';
            myHtml += '<ul>';
        for (x=0; x<results.length; x++) {
            myHtml += "<li><p> Ranking# " + (x+1) +'<br>';
            myHtml += "<br>Name: " + results[x].name + '<br>';
            myHtml += 'Cool Points: ' +results[x].coolness_points +'<br>';
            myHtml += 'Attitude: ' + results[x].attitude +'</p></li>';
        }
        myHtml += '</ul>';
        res.send(myHtml);           
    });
    
});
