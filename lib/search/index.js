"use strict";
var Combine = require('./lib/Combine');

//express module part
var express = require ('express'),
    app = module.exports = express();

app.use(express.bodyParser());
app.set('layout', 'layout');

app.get('/search', function(req, res) {
    var combined = new Combine(['youtube', 'wikipedia']);
    //TODO: sanitize input
    var term = req.query['q'];
    debugger;
    if(term.length > 3) {
        combined.search(term, function(err, data){
            // console.log(data.videos[0].snippet);
            res.send(data);
        });
    } else {
        res.send([]);
    }
});

// module.exports = Search;