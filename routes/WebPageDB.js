var express = require('express');
var app = express();
// var server = require('server');
// var http = require('http');


// //
host = "localhost";
port = 8081;

cloudant = {
    username : "97966228-6ae2-47c5-b355-68982b4447e9-bluemix", // : Update
    password : "cc9cdfe97378460cc59198a9712e0712a03eb0954f102e794fea2bae8420ff9b", // : Update
    url : "https://97966228-6ae2-47c5-b355-68982b4447e9-bluemix.cloudant.com" // : Update
};if (process.env.hasOwnProperty("VCAP_SERVICES")) {
    // Running on Bluemix. Parse out the port and host that we've been assigned.
    var env = JSON.parse(process.env.VCAP_SERVICES);
    var host = process.env.VCAP_APP_HOST;
    var port = process.env.VCAP_APP_PORT;

    // Also parse out Cloudant settings.
    cloudant = env['user-provided'][0].credentials;
} nano = require('nano')('https://' + cloudant.username + ':' + cloudant.password + '@' + cloudant.url.substring(8));
db = nano.db.use('webpage');

// app.get('/save_result', function(request, response) {
//     var name = request.query.name;
//     var score = request.query.score;
//
//     var scoreRecord = { 'name': username, 'score' : parseInt(score), 'date': new Date() };
//     db.insert(scoreRecord, function(err, body, header) {
//         if (!err) {
//             response.send('Successfully added one score to the DB');
//         }
//     });
// });


app.get('/save_result', function(request, response) {

    var resultRecord = {
        // 'name': server.response.UserName,
        // 'ID' :server.response.UserId,
        // 'date': new Date()
        'name': '666',
        'ID':'ddd',
        'date': new Date()
    };
    db.insert(resultRecord, function(err, body, header) {
        if (!err) {
            response.send('Successfully added one score to the DB');
        }
    });
});