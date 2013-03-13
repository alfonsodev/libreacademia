exports = module.exports = function() {
    var API_KEY = 'AIzaSyDegWH-6lZJf-R7X-aPvZrjg7aucW3op20';
    var googleapis = require('googleapis');
        googleapis.load('youtube', 'v3', function(err, client) {
            var params = { part: 'snippet' };
            var request = client.youtube.search.list(params);
        request.execute(function (err, response) {
            console.log(err);
            debugger;
        });
    });


};