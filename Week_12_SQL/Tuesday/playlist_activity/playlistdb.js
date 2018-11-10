var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Wh0v1@n',
    database: 'playlist_DB'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as ' +connection.threadId);
    console.log('------------\n');
    // CreateSongsTable();
    addSong('Caribou Lou', 'Tech N9ne','rap');
    addSong('The Kill', '30 Seconds To Mars', 'rock');
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

function addSong (title, artist, genre) {
    connection.query('INSERT INTO songs (title,artist,genre) VALUES ('+'"'+title+'","'+artist+'","'+genre+'")',(err,resp) => {
        if (err) {console.log(err);}
        else {console.log(resp);}
    })
};




