## SQL
Today's class is on sql databases > tables.
We start by reviewing tables and then importing a large CSV.

### Schema 
schema is a sql file that you should save that has the outline and structure of your initialization of your database, tables, etc.
```sql
CREATE DATABASE top_songsDB;

USE top_songsDB;

-- 1,Bing Crosby,White Christmas,1942,39.903,23.929,5.7,2.185,0.54

CREATE TABLE Top5000 (
    position INT NOT NULL AUTO_INCREMENT,
    artist VARCHAR(100) NOT NULL,
    title VARCHAR(150) NOT NULL,
    year INT,
    total_score DECIMAL(10,3),
    us_score DECIMAL(10,3),
    uk_score DECIMAL(10,3),
    eu_score DECIMAL(10,3),
    others_score DECIMAL(10,3), 
    PRIMARY KEY(position)
);
```
when building out a table or changing a table you can iniate the changes through sql queries. 
```sql
ALTER TABLE
```
We don't really go over this but I was trying to understand it more because I initally built my table without the column `total_score`.
Having an incorrect table built and trying to import didn't work well, the data to be had an additional column and my table had no clue what to do with it.


### Javascript + SQL
Once we import the `.csv` file we now need to pull the data using javascript and log it into the console creating a node app with inquirer.
`npm install & require()` are necessities for this.
using mysql npm you can establish connections with the sql server given the connections parameters. 
```js
var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    port: ####,
    user: 'root',
    password: '',
    database: 'your_database_db'
});
```
We then need to establish SQL Queries, which are scripts of sql code that direct and communicate with the sql server/database.
```js
function searchArtist (name) {
    connection.query("SELECT * FROM top_songsdb.top5000 WHERE artist LIKE '"+name+"';",(err,resp) => {
        if (err) {console.log(err)}
        makePretty(resp);
        startRound();
    });
};
```

### Multiple tables
We then import another `.csv` file and use `JOIN` to establish connections between the two tables (song, albums).
`JOIN` can be tricky since it restricts data based on provided conditions:
`RIGHT JOIN, LEFT JOIN, INNER JOIN` , `JOIN ON`.

### Promises
Understanding promises is important to working with SQL.
If you code asynch without caution to promises you can run into a lot of issues.
promises and functions that operate when promises are completed are pivitol to using sql in web development. 


### Notes
Since mysql in javascript allows you to run direct sql commands from a javascript file. You can ultimately create and manage databases all from online once the necessary software is on the device. 
I wonder if there's any limitations to how much you can pass into the `connection.query()` function. 
For loops and recursions are key to looping through application processes while keeping seemless on the front end. 

