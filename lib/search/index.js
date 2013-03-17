"use strict";
var search = function() {
    var Youtube = require('./lib/youtube');
    this.youtube = new Youtube();
};

search.prototype.query = function(query, mainCallback) {
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
module.exports = search;