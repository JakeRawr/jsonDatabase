'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());

var fs = require('fs');
var file = ('./jsonFile/');

app.post('/:user', function (req, res) {
  var ws = fs.createWriteStream(file + req.params.user + '.json');
  ws.write(JSON.stringify(req.body));
  ws.end();
  res.json(req.body);
});

app.get('/:user', function (req, res) {
  var rs = fs.createReadStream(file + req.params.user + '.json');
  rs.on('open', function () {
    res.writeHead(200, {'Content-Type': 'application/json'});
    rs.pipe(res);
  });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: %d', app.get('port'));
});

module.exports = app;
