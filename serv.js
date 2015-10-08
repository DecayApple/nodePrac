var http = require('http');
var express = require('express');
var app = express();
var fs = require ('fs');
http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('Hello World');
}).listen('8080','0.0.0.0');
app.get('/',function(req, res){
	fs.readFile('index.html', function(error, data){
		if(error) console.log(error);
		else{
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end(data)
		}
	});
})

console.log('Server running');