var http = require('http');
var app = require("./app")

http.createServer(app.handleRequest).listen(5000);

console.log("Server running");