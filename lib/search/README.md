search
===
Open educational resourser searcher
it is a wrapper for Youtube, Wikipedia, Wikibooks

- Usage

    // let's say we want results about relativity
    var search = require('search');

    search('relativity', function(err, data){
        console.log(data);
    });

- Filtering

    //You want only books

