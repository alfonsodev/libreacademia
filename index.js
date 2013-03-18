"use strict";
var express = require ('express'),
    path = require('path'),
    app = express();

// Aplication modules
var search = require('./lib/search');

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.set('layout', 'layout');
    app.enable('view cache');
    app.engine('html', require('hogan-express'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));

    //Application modules
    app.use(search);
});

app.configure('development', function() {
    app.use(express.errorHandler());
    app.disable('view cache');
});

// Router
app.get('/', function(req, res) {
    res.render('home', { title: 'libroAacademia' });
});

app.listen(3000);
console.log('listening on port 3000');