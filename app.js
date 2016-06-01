
var express = require('express');
var app = express();
var dbConnection = require('./dbConnection');
var routes = require('./routes');
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'jade');

app.set('views', __dirname + '/views');

app.use(express.static( __dirname + '/public'));

app.get('/', function(req, res){
	res.render( __dirname + '/views/index.jade');
});

app.post('/register', routes);


app.listen(3000, function(){
	console.log('port 3000 is on!')
});