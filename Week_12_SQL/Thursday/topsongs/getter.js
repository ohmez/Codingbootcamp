var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'top_songsdb'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as ' +connection.threadId);
    console.log('------------\n');
    startRound();
    
});

function searchArtist (name) {
    connection.query("SELECT * FROM top_songsdb.top5000 WHERE artist LIKE '"+name+"';",(err,resp) => {
        if (err) {console.log(err)}
        makePretty(resp);
        startRound();
    });
};
function makePretty(resp) {
    resp = JSON.stringify(resp, null, 2);
    results = JSON.parse(resp);
    if (results.length > 1) {
        pop = [];
        for (x=0; x<results.length; x++) {
            var a = [];
            a.push( 'Artist: '+ results[x].artist +
                    '\nSong Name: ' + results[x].title +
                    '\nPosition: '+ results[x].position +
                    '\nRelease Year: ' + results[x].year +
                    '\nTotal_score: ' + results[x].total_score+
                    '\nUS Score: '+ results[x].us_score+
                    '\nUK Score: ' +results[x].uk_score+
                    '\nEU Score: ' +results[x].eu_score+
                    '\nOther Scores: ' + results[x].others_score)
            pop.push(a[0]);
        }
        console.log('more than one \n------------\n');
        console.log(pop.join('\n------------\n') +'\n------------\n'+ results.length + ' total top hits\n');
    }
    
};
function startRound() {
    inquirer.prompt([{type: 'rawlist', name: 'task', message:'what would you like to do?', choices: ['search an artist', 'find multi hitters', 'top x - y', 'find top song','top albums and songs'] }])
    .then(answers => {
        switch(answers.task) {
            case 'search an artist': 
            inquirer.prompt([{type:'input', name:'artist', message: 'what artist?', default: 'pink floyd'}])
            .then(answers => {
                var b = answers.artist;
                searchArtist(b);                
            })
            console.log('what artist?');
            break;
            case 'find multi hitters':
            console.log('returning multihitters');
            multiHitters();
            break;
            case 'top x - y': 
            console.log('returning range');
            rangeSearch();
            break;
            case 'find top song':
            console.log('what song?')
            songSearch();
            break;
            case 'top albums and songs':
            topAlbums();
            default:
            return;
            break;
        }
    });
};

function multiHitters() {
    var sql = 'SELECT artist, COUNT(*) as c FROM top5000 GROUP BY artist HAVING c >20;'
    connection.query(sql, (err,resp) => {
        if (err) throw err;
        resp = JSON.stringify(resp, null, 2);
        results = JSON.parse(resp);
        if (results.length > 0) {
            for(x=0; x < results.length; x++) {
                console.log('Artist: '+results[x].artist+
                '\nHas '+results[x].c+ ' hits on the top5000\n');
            }            
        } else {
        console.log(resp);

        }

    startRound();
    })
};

function rangeSearch() {
    inquirer
      .prompt([
        {
          name: "start",
          type: "input",
          message: "Enter starting position: ",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
          name: "end",
          type: "input",
          message: "Enter ending position: ",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        var query = "SELECT position,title,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
        connection.query(query, [answer.start, answer.end], function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log(
              "Position: " +
                res[i].position +
                " || Song: " +
                res[i].title +
                " || Artist: " +
                res[i].artist +
                " || Year: " +
                res[i].year
            );
          }
          startRound();
        });
      });
  }


function songSearch() {
    inquirer
        .prompt({
            name: "song",
            type: "input",
            message: "What song would you like to look for?"
        })
        .then(function (answer) {
            console.log(answer.song);
            connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function (err, res) {
                console.log(
                    "Position: " +
                    res[0].position +
                    " || Song: " +
                    res[0].song +
                    " || Artist: " +
                    res[0].artist +
                    " || Year: " +
                    res[0].year
                );
                startRound();
            });
        });
}

function topAlbums() {
    var sql = 'SELECT topalbums.artist, topalbums.year, topalbums.album, top5000.title FROM topalbums '+
        'RIGHT JOIN top5000 ON topalbums.artist =top5000.artist AND topalbums.year = top5000.year LIMIT 10';
    
    connection.query(sql,(err,resp) => {
        if(err) throw err;
        console.log(JSON.stringify(resp,null,3));
        startRound();
        return;
    })

}