var express = require('express'),
    app = module.exports = express()

app.post('/search', function(req, res) {
    "use strict";
    var googleapis = require('googleapis');
    googleapis.load('youtube', 'v3', function(err, client) {
    debugger;

    var params = { part: 'snippet' };
    var request = client.youtube.search.list(params);
    request.execute(function (err, response) {
            console.log(err);
            debugger;
        });
    });
    res.send('result 1');
});
