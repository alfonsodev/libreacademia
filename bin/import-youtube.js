var googleapis = require('googleapis'),
    GOOGLE_API_KEY = 'your api key here';

googleapis
  .discover('youtube', 'v3')
  .execute(function(err, client) {
    var params = { part: 'snippet', categoryId: '27' };
    client.youtube.search
      .list(params)
      .withApiKey(GOOGLE_API_KEY)
      .execute(function(err, response) {
        if (err) {
            console.log(err);
        } else {
            console.log(response.items[0]);
        }
    });
  });
