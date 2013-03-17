"use strict";
var express = require ('express'),
    search = require('./lib/search'),
    app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(search);

app.get('/', function(req, res) {
    search('foo', function(err, data){
        console.log(data[0]);
        res.render('home');
    });
});

app.listen(3000);

console.log('listening on port 3000');