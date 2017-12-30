var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TESA');

var tesa = require('./models/tesa');
/*
var Pressure = mongoose.model('pressure');
var Temperature = mongoose.model('temperature');
var Humidity = mongoose.model('humidity');
var Gyroscope = mongoose.model('gyroscope');
var Accelerometer = mongoose.model('accelerometer');
var Magnetometer = mongoose.model('magnetometer');
var Leds = mongoose.model('leds');
var Din = mongoose.model('din');
*/

app.set('port',5000);
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/pressure/:teamID/:N', function(req, res){
    var teamID = req.params.teamID;
    var N = req.params.N;
    var query = mongoose.model('pressure').find({teamID:teamID});
    if(N != 'all'){
        query = query.limit(parseInt(N));
    }
    query.exec(function(err, data){
        if(err) {
            res.json({
                statusCode: status["02"].code,
                statusDesc: status["02"].desc
            });
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

app.get('/temperature/:teamID/:N', function(req, res){
    var teamID = req.params.teamID;
    var N = req.params.N;
    var query = mongoose.model('temperature').find({teamID:teamID});
    if(N != 'all'){
        query = query.limit(parseInt(N));
    }
    query.exec(function(err, data){
        if(err) {
            res.json({
                statusCode: status["02"].code,
                statusDesc: status["02"].desc
            });
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

app.get('/humidity/:teamID/:N', function(req, res){
    var teamID = req.params.teamID;
    var N = req.params.N;
    var query = mongoose.model('humidity').find({teamID:teamID});
    if(N != 'all'){
        query = query.limit(parseInt(N));
    }
    query.exec(function(err, data){
        if(err) {
            res.json({
                statusCode: status["02"].code,
                statusDesc: status["02"].desc
            });
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

app.get('/gyroscope/:teamID/:N', function(req, res){
    var teamID = req.params.teamID;
    var N = req.params.N;
    var query = mongoose.model('gyroscope').find({teamID:teamID});
    if(N != 'all'){
        query = query.limit(parseInt(N));
    }
    query.exec(function(err, data){
        if(err) {
            res.json({
                statusCode: status["02"].code,
                statusDesc: status["02"].desc
            });
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

app.get('/accelerometer/:teamID/:N', function(req, res){
    var teamID = req.params.teamID;
    var N = req.params.N;
    var query = mongoose.model('accelerometer').find({teamID:teamID});
    if(N != 'all'){
        query = query.limit(parseInt(N));
    }
    query.exec(function(err, data){
        if(err) {
            res.json({
                statusCode: status["02"].code,
                statusDesc: status["02"].desc
            });
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

app.get('/magnetometer/:teamID/:N', function(req, res){
    var teamID = req.params.teamID;
    var N = req.params.N;
    var query = mongoose.model('magnetometer').find({teamID:teamID});
    if(N != 'all'){
        query = query.limit(parseInt(N));
    }
    query.exec(function(err, data){
        if(err) {
            res.json({
                statusCode: status["02"].code,
                statusDesc: status["02"].desc
            });
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

app.get('/leds/:teamID/:N', function(req, res){
    var teamID = req.params.teamID;
    var N = req.params.N;
    var query = mongoose.model('leds').find({teamID:teamID});
    if(N != 'all'){
        query = query.limit(parseInt(N));
    }
    query.exec(function(err, data){
        if(err) {
            res.json({
                statusCode: status["02"].code,
                statusDesc: status["02"].desc
            });
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

app.get('/din:M/:teamID/:N', function(req, res){
    var teamID = req.params.teamID;
    var M = req.params.M;
    if( [1,2,3,4,5].indexOf(parseInt(M)) <= -1 ){
        res.json({
            statusCode: status["02"].code,
            statusDesc: status["02"].desc
        });
        return null;
    }
    var N = req.params.N;
    var query = mongoose.model('din').find({teamID:teamID, M:M});
    if(N != 'all'){
        query = query.limit(parseInt(N));
    }
    query.exec(function(err, data){
        if(err) {
            res.json({
                statusCode: status["02"].code,
                statusDesc: status["02"].desc
            });
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
app.get('/insert', function(req, res) {
    var Pressure = mongoose.model('pressure');
    var nn = new Pressure({
        teamID:1,
        sensID:1,
        val:60
    });
    nn.save(function(err, result) {
        if (err) res.send(err);
        res.json(result)
    });
    //res.render('pages/index');
    //res.send('ok');
});
*/

app.get('*', function(req, res){
    res.json({
        statusCode: status["02"].code,
        statusDesc: status["02"].desc
    });
});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});