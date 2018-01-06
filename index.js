var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var schema = require('./models/schema');
var mockup_schema = require('./models/mockup_schema');
var db = require('./models/db');

app.set('port',5000);
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var apiRoutes = express.Router();
var mockupRoutes = express.Router();

const status = {
    "00": {
        code: "00",
        desc: "Success"
    },
    "01": {
        code: "01",
        desc: "Cannot find the given TeamID"
    },
    "02": {
        code: "02",
        desc: "Cannot find the requested data"
    }
};

apiRoutes.get('/:table/:teamID/:N', function(req, res){
    var table = req.params.table;
    var teamID = req.params.teamID;
    var N = req.params.N;
    var query = db.model(table).find({teamID:teamID});
    if(N != 'all'){
        query = query.limit(parseInt(N));
    }
    query.exec(function(err, data){
        if(err) {
            res.send(err);
        } else if(data.length == 0){
            res.json({
                statusCode: status["01"].code,
                statusDesc: status["01"].desc
            });
        } else {
            res.json({
                statusCode: status["00"].code,
                statusDesc: status["00"].desc,
                data: data
            });
        }
    });
});

mockupRoutes.get('/:table/:teamID/:N', function(req, res){
    var table = 'mockup_'+req.params.table;
    var teamID = req.params.teamID;
    var N = req.params.N;
    var query = db.model(table).find({teamID:teamID}).select({
        val: 1,
        sensID: 1,
        date: 1,
        _id: 0
    });
    if(N != 'all'){
        query = query.limit(parseInt(N));
    }
    query.exec(function(err, data){
        if(err) {
            res.send(err);
        } else if(data.length == 0){
            res.json({
                statusCode: status["01"].code,
                statusDesc: status["01"].desc
            });
        } else {
            res.json({
                statusCode: status["00"].code,
                statusDesc: status["00"].desc,
                data: data
            });
        }
    });
});

/*
apiRoutes.post('/insert/:table', function(req, res){
    var pass = req.query.pass;
    if(pass != 'TESA2018byKMUTNB'){
        res.send('Error');
    } else {
        var table = req.params.table;
        var schema = db.model(table);
        var data = new schema(req.body);
        data.save(function(err, result){
            if (err) res.send(err);
            else res.send('success');
        });
    }
});
*/

app.use('/api', apiRoutes);
app.use('/mockup', mockupRoutes);

/*
app.get('*', function(req, res){
    res.json({
        statusCode: status["02"].code,
        statusDesc: status["02"].desc
    });
});
*/


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});