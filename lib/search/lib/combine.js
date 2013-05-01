"use strict";
var Combine = function() {
    var Youtube = require('./source/youtube'),
        Wikipedia = require('./source/wikipedia');
    this.youtube = new Youtube();
    this.wikipedia = new Wikipedia();
};

Combine.prototype.search = function(term, mainCallback) {
    var async = require('async'),
        self = this;
    async.parallel({
        videos: function(callback) {
            self.youtube.search(term, callback);
        },
        wiki: function(callback) {
            self.wikipedia.search(term, callback);
        }
    },
    function(err, all) {
        var results = [];
        console.log(all.videos);
        results = all.videos.concat(results);
        results = all.wiki.concat(results);
        mainCallback(null, results);
    });
};
module.exports = Combine;