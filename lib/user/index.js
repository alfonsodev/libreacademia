var nano = require('nano')
  , debug = require('debug')('user');
   
module.exports = {
    save: function (data) {
        var username = process.env.LIBRE_DB_USER
          , pass = process.env.LIBRE_DB_PASS
          , server = require('nano')('http://' 
                  + username 
                  + ':' 
                  + pass 
                  + '@libre.iriscouch.com')
          , db = server.use('libreacademia')
          , doc = {
            type: "user",
            email: data.email
          };
debugger;
          db.insert(doc, data.email, function(err, body) {
              if (err) {
                  debug(err);
              } else {
                  debug('Inserted one user');
              }
          });

    }
}
