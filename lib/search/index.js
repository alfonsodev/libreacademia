"use strict";
//Search class
var Search = function() {
    var Youtube = require('./lib/youtube');
    this.youtube = new Youtube();
};
Search.prototype.query = function(query, mainCallback) {
    var async = require('async'),
        self = this;
    async.parallel({
        videos: function(callback) {
            self.youtube.search(query, callback);
        }
    },
    function(err, results) {
        mainCallback(null, results);
    });
};

//express module part
var express = require ('express'),
    app = module.exports = express();
    app.set('layout', 'layout');

app.post('/search', function(req, res) {
    var search = new Search();
    search.query(req.body.q, function(err, data){
        console.log(data.videos[0].snippet);
        res.render('home', {
                title: 'search results',
                videos: data.videos
            });
    });
});

// module.exports = Search;