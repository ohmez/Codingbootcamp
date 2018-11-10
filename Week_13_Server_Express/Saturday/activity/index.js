var http = require('http');
var PORT = 7500;
var server = http.createServer(handleRequest);
var fs = require('fs');


function handleRequest(req,res) {
    var path = req.url;
    switch(path) {
        case '/':
        return displayHome(path,req,res);
        case '/fav_food':
        return displayFavFood(path,req,res);
        case '/fav_movies':
        return displayFavMovies(path,req,res);
        case '/fav_frameworks':
        return displayFrameworks(path,req,res);
        default:
        return displayHome(path,req,res);
    }
};

server.listen(PORT, function () {
    console.log('localhost' + PORT+' active.');
})
function read(file, res) {
    fs.readFile(__dirname+'/'+file, (err,data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
}

function displayHome(url,req,res) {
    read('index.html',res);
};
function displayFavFood(url,req,res) {
    read('food.html',res);
};
function displayFrameworks(url,req,res) {
    read('frameworks.html',res);
};

function displayFavMovies(url,req,res) {
    read('movies.html',res);
};

