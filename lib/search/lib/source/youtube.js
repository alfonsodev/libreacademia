"use strict";
var youtube = function() {
    if(!process.env.GOOGLE_API_KEY) {
        throw new Error('GOOGLE_API_KEY env var NOT DEFINED');
    } else {
        this.GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    }
};

youtube.prototype.search = function(query, callback) {
    debugger;
    var googleapis = require('googleapis'),
        self = this;
    self.cb = callback;
    self.maxTime = setTimeout(function() {
                        console.log('Timeout');
                    }, 3000);
    var doSearch = function(err, client) {
        var params = { part: 'snippet', q: query },
            request = client.youtube.search.list(params);
        client.withApiKey(self.GOOGLE_API_KEY);

        request.execute(function (err, response) {

            //the request didn't exced the timeout
            clearTimeout(self.maxTime);
            if(err){
                console.log(err);
                self.cb(err);
            } else {
                var i = response.items.length,
                    results = [];
                while(i--) {
                    results.push({
                        url: 'http://youtube.com/watch?v=' + response.items[i].id.videoId,
                        title: response.items[i].snippet.title,
                        thumbnail: response.items[i].snippet.thumbnails.default.url,
                        source: 'Youtube'
                    });
                }
                self.cb(null, results);
            }
        });
    };

    googleapis.load('youtube', 'v3', doSearch);
};
module.exports = youtube;
