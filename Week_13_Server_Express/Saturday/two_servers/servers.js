var http = require('http');
var PORT = 7500;
var PORT2 = 7000;

function handleRequest(request, response) {
    response.end('Youve hit the mark: ' + request.url +
    'You reached level one'); 

};
function handleRequest2(request, response) {
    response.end('Youve hit the mark: ' + request.url+
    'You reached level two');
}

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT, function() {
    console.log('server listening on localhost:' + PORT);
});

server2.listen(PORT2, function() {
    console.log('server listening on localhost:' + PORT2);    
});