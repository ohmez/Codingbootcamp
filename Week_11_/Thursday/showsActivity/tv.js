var fs = require('fs');
var request = require('request');
var divider = "\n------------------------------------------------";

function readLog() {
    fs.readFile('log.txt', (err,data) => {
        if (err) throw err; 
        console.log(data); 
    })
}
var TV = function () {
    this.findShow = function(query) {
        var url = 'http://api.tvmaze.com/singlesearch/';
        request(url + 'shows?q=' + query, (err, response, body) => {
            var results = JSON.parse(body);
            var showData = [
                'Show: ' + results.name,
                'Genre(s): ' + results.genres.join(", "),
                'Rating: ' + results.rating.average,
                'Network: ' + results.network.name,
                'Summary: ' + results.summary
            ].join("\n\n");
            console.log(showData);
            fs.appendFile('log.txt', '\n'+showData + divider, (err) => {
                if (err) throw err;
            });
        })

    };// end this.findShow
    this.findActor = function(query) {
        var url = 'http://api.tvmaze.com/search/';
        request(url + 'people?q=' + query, (err, response, body) => {
            var results = JSON.parse(body);
            var actor = results[0].person
            var actorData = [
                'Actor: ' + actor.name,
                'Birthday: ' + actor.birthday,
                'From: ' + actor.country.name,
                'Gender: ' + actor.gender
            ].join("\n\n");
            console.log(actorData);
            fs.appendFile('log.txt', actorData + divider, (err) => {
                if (err) throw err;
            });
        });
    };// end this.findActor
};  // TV object/function

 
module.exports = new TV;