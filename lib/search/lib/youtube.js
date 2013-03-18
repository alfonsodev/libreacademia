"use strict";
var youtube = function() {
    if(!process.env.GOOGLE_API_KEY) {
        throw new Error('GOOGLE_API_KEY env var NOT DEFINED');
    } else {
        this.GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    }
};

youtube.prototype.search = function(query, callback) {
    var googleapis = require('googleapis'),
        self = this;
    self.cb = callback;
    var doSearch = function(err, client) {
        var params = { part: 'snippet', q: query },
            request = client.youtube.search.list(params);
        client.withApiKey(self.GOOGLE_API_KEY);
        request.execute(function (err, response) {
            debugger;
            if(err){
                self.cb(err);
            } else {
                self.cb(null, response.items);
            }
        });
    };

    googleapis.load('youtube', 'v3', doSearch);
};
module.exports = youtube;