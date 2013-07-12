var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var index = fs.readFileSync('index.html', 'utf8');

app.get('/', function(request, response) {

  //var thing = fs.readFileSync('index.html');
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
