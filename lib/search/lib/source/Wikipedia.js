//    var wikiurl = "http://en.wikipedia.org/w/api.php?callback=?",
//       wikiparams = { srsearch: q, action: "query", list: "search", format: "json" };
//  $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a><br>" + item.snippet + "<br><br></div>");

"use strict";

var wikipedia = function() {
    this.urlBase = 'http://en.wikipedia.org/w/api.php?';
};

wikipedia.prototype.search = function(query, callback) {
    var request = require('request'),
        wikiparams = "action=query&list=search&srsearch="+query+"&format=json";

    request({
        uri: this.urlBase + wikiparams,
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/532.5 (KHTML, like Gecko) Chrome/4.0.249.78 Safari/532.5'}
    }, function (err, response, body) {
        if(err) {
            callback(err);
        } else if(response.statusCode === 200) {
            var jsonBody = JSON.parse(body),
                wikilogo = "http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/wikipedia.png",
                results=[],
                i = jsonBody.query.search.length;

            while(i--) {
                results.push({
                    url: "http://en.wikipedia.org/wiki/" + encodeURIComponent(jsonBody.query.search[i].title),
                    title: jsonBody.query.search[i].title,
                    thumbnail: wikilogo
                });
            }
            callback(null, results);
        } else {
            throw new Error(response.body);
        }
    });
};
module.exports = wikipedia;