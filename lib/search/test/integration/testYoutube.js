var should = require('should');

describe('Search on youtube api', function() {
    it('it should return some results', function(done) {
        var Search = require('../..');
        var search = new Search();
        search.query('math', function(err, data){
            data.videos.length.should.be.above(0);
            done();
        });
    });
});