var express = require ('express'),
    app = express();
//    search = require('./lib/search');
//    app.use('search');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.get('/', function(req, res) {
    res.render('home');
});
app.listen(3000);


