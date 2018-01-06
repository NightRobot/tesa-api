var request = require('request');
var https = require('https');

var uri  = "https://loraiot.cattelecom.com"

var agentOptions = {
    host: 'loraiot.cattelecom.com',
    port: '443',
    path: '/',
    rejectUnauthorized: false
}

agent = new https.Agent(agentOptions);

request.get({
    url: uri + '/api/temperature/1/all',
    method: 'GET',
    agent: agent,
    header: {
        'Content-Type': 'application/json'
    }
}, function(err, res, body){
    if(err) console.log(err);
    else console.log(body);
});