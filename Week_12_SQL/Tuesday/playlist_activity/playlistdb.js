var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'playlist_DB'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as ' +connection.threadId);
    console.log('------------\n');
    CreateSongsTable();
});

function CreateSongsTable() {
    connection.query('CREATE TABLE songs (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(30) NOT NULL, artist VARCHAR(35), genre VARCHAR(40),PRIMARY KEY (id))',(err,resp) => {
        if (err) {console.log(err)};
        // console.log(resp);
        connection.query('DESCRIBE songs', (err,resp) => {
            if(err) throw err;
            resp = JSON.stringify(resp,null,2);
            console.log(resp);
        })
        connection.end();
    })
    
};




