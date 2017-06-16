var express = require('express');
var port = 6677;
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.use(express.static('./src/client/'));
app.use(express.static('./'));
app.use(express.static('/tmp'));
app.use('/*', express.static('./src/client/index.html'));

console.log('Starting node');
console.log('PORT='+port);

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
  console.log('\n__dirname = ' + __dirname + '\nprocess.cwd = ' + process.cwd());
});

module.exports = app;
