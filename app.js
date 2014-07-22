var fs = require('fs');
var express = require('express');
var app = express();


app.get('/:filename', function(req, res) {
	var file =  'public/' + req.params.filename;
	fs.readFile(file, function(err, data){
		res.header('Content-Type', 'text/html');
		var fileContents = data;
		res.send(fileContents);
	});
});

var server = app.listen(5445, function() {
	console.log('Express server listening on port ' + server.address().port);
});
