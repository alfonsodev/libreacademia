"use strict";
var express = require ('express'),
    Search = require('./lib/search'),
    search = new Search(),
    app = express();

app.use(express.bodyParser());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//router
app.get('/', function(req, res) {
    res.render('home');
});
app.post('/search', function(req, res) {
    search.query('foo', function(err, data){
        console.log(data[0]);
        res.render('home');
    });
});


app.listen(3000);

console.log('listening on port 3000');