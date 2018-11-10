### Servers
Servers are software running on dedicated hardware listening for client requests with code built to provide responses to requests.

### HTTP vs HTTPS
Mainly they're both the same thing but HTTPS is encrypted to protect traffic information on server, making it harder for people to listen to whats being sent through the server.

### My First Server
We can initate a localhost server by using `require(http)`
servers have to be set to `listen` to ports that are channels for requests and responses to be sent through. 
ports are like email addresses, everybody has one or more, and you can send things to it and it can send things to you. 
;)

### Requests
requests represent the URL information sent from the client.
URL, Port, etc are all in the request.
This is an object with tons of keys available to use; many defaulted or null unless called/provided. 

### server instances
I had a server instance that kept running
You can find in task manager node-server and close the instances to stop them.
I wasn't able to rerun the file with a `server.close()` added in and make it stop.
This was tricky. 

### Response
response is what will come back from the server request.
once a url is active and you go to it thats the request, the response is what we can log to the client.
You can use readfile to populate the information 

npm inspect 
then $ inspect file.filetype
