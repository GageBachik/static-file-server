var fs = require('fs');
var express = require('express');
var app = express();


app.get('/', function(req, res) {
	res.send('<h1>Hello Boulder</h1>');
});

app.get('/data', function(req, res) {
	fs.readFile('data.txt', function(err, data){
		res.header('Content-Type', 'text/html');
		var fileContents = data;
		res.send(fileContents);
	});
});

var server = app.listen(5445, function() {
	console.log('Express server listening on port ' + server.address().port);
});
