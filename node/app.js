var url = require('url');
var fs = require('fs');

var renderHTML = function(path, response){
	fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

var handleRequest = function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	//console.log(url.parse(request.url).pathname);
	var path = url.parse(request.url).pathname;
	switch (path) {
		case "/":
			renderHTML("./index.html", response);
			break;
		case "/login":
			renderHTML("./login.html", response);
			break;
		default:
			response.writeHead(404);
			response.write("Route not found");
			response.end();
	}
}

module.exports = {
	handleRequest
}