"use strict";
//var assert = require('assert');
var should = require('should');

describe('test basic structure of the module', function(){
    it('search should be a object, instance of Search', function(){
        var Search = require('..'),
            search = new Search();
        search.should.be.a('object');
        search.should.be.an.instanceof(Search);
    });

    it('should have a query method', function(){
        var Search = require('..'),
            search = new Search();
        search.query.should.be.a('function');
    });
});

