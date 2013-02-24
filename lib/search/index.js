var express = require('express'),
    app = module.exports = express();

// app.set('views', __dirname);
// app.set('view engine', 'jade');

app.post('/search', function(req, res){
    res.send('result 1');
});

