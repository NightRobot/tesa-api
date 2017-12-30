var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port',5000);
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});