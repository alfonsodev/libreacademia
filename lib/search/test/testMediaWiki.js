var mediaWiki = require('..'),
    wiki = new mediaWiki();

describe('MediaWiki search funcionality', function() {
   it('can search in wikipedia', function() {
        wiki.search('maths', function(err, data) {
           console.log(data); 
        }, 10);
   });
});

