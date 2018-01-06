var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pressure = new Schema({
    teamID: {
        type: Number
    },
    sensID: {
        type: String
    },
    val: {
        type: String
    },
    date: {
        type: String,
        default: Date.now()
    }
});

var temperature = new Schema({
    teamID: {
        type: Number
    },
    sensID: {
        type: String
    },
    val: {
        type: String
    },
    date: {
        type: String,
        default: Date.now()
    }
});

var humidity = new Schema({
    teamID: {
        type: Number
    },
    sensID: {
        type: String
    },
    val: {
        type: String
    },
    date: {
        type: String,
        default: Date.now()
    }
});

var rain = new Schema({
    teamID: {
        type: Number
    },
    sensID: {
        type: String
    },
    val: {
        type: String
    },
    date: {
        type: String,
        default: Date.now()
    }
});

var windspeed = new Schema({
    teamID: {
        type: Number
    },
    sensID: {
        type: String
    },
    val: {
        type: String
    },
    date: {
        type: String,
        default: Date.now()
    }
});



module.exports = mongoose.model('mockup_pressure', pressure);
module.exports = mongoose.model('mockup_temperature', temperature);
module.exports = mongoose.model('mockup_humidity', humidity);
module.exports = mongoose.model('mockup_rain', rain);
module.exports = mongoose.model('mockup_windspeed', windspeed);