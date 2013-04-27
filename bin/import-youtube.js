/*
    education categoryId = 27
*/
var googleapis = require('googleapis');
var doSearch = function(err, client) {
    var params = { part: 'snippet', categoryId: "27" },
        request = client.youtube.search.list(params);
    client.withApiKey(process.env.GOOGLE_API_KEY);

    request.execute(function (err, response) {
        if(err){
            console.log(err);
        } else {
            console.log(response.items[0]);
        }
    });
};

googleapis.load('youtube', 'v3', doSearch);