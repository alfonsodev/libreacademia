var http = require('http'),
    url = require('url'),
    _ = require('underscore'),
    querystring = require('querystring');

var mediawiki = function() {
    this.defaultApiUrl = url.parse('http://en.wikipedia.org/w/api.php');
};

// http://www.mediawiki.org/wiki/API:Opensearch
mediawiki.prototype.search = function(query, callback, limit, mediaWikiApiUrl) {
    var params = [],
        apiUrl = mediaWikiApiUrl || this.defaultApiUrl,
        queryParams = {
            action: 'opensearch',
            search: query,
            limit: (limit || 3),
            format: 'json'
        };
        debugger;
    var queryString = querystring.stringify(queryParams);
    try {
        makeQuery(apiUrl, queryString, function(data) {
            debugger;
            var results = data[1];
            var links = _(results).map(function( pagename) {
                    return {'page' : pagename, 'url' : linkify(apiUrl, pagename) };
                });
            callback(null, links);
        }, function(error) {
            callback(error);
        });
    } catch (e) {
        callback(e);
    }
};

mediawiki.prototype.linkify = function(apiUrl, pageName) {
    var path = '/wiki/' + pageName.replace(/ /g, '_');
    var port = '';
    if(apiUrl.port) {
        port = ':' + port;
    }
    var link = url.parse(apiUrl.protocol + '//' + apiUrl.hostname + port + path);
    return link;
};

mediawiki.prototype.QueryFailedException = function(statusCode) {
    this.statusCode = statusCode;
};

mediawiki.prototype.getPort = function(url) {
    if(url.port) {
        return port;
    }
    if(url.protocol == 'https:') {
        return 443;
    }
    return 80;
};

mediawiki.prototype.makeQuery = function (apiUrl, query, onSuccess, onError) {
    var path = apiUrl.pathname + '?' + query,
        requestParams = {
            host: apiUrl.host,
            port: getPort(apiUrl),
            path: path,
            method: 'GET',
            headers: {'User-agent': 'Node.js WikiMedia API/0.1' }
        },
        req = http.request(requestParams, function(resp) {
            if(resp.statusCode == 200) {
                var message = '';
                resp.on('data', function(chunk) {
                    message += chunk;
                });
                resp.on('end', function() {
                    onSuccess(JSON.parse(message));
                });
            } else {
                onError( new QueryFailedException(resp.statusCode));
            }
        });

    req.on('error', function(e) {
        onError(e);
    });
    req.end();
};

module = module.exports = mediawiki;