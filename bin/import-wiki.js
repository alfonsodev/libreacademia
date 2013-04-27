
var http = require('http');
var ProgressBar = require('progress');
var hostname = "http://dumps.wikimedia.org/anwiki/latest/anwiki-latest-pages-articles.xml.bz2";
request.addListener('response', function (response) {
                var downloadfile = fs.createWriteStream(filename, {'flags': 'a'});
                        sys.puts("File size " + filename + ": " + response.headers['content-length'] + " bytes.");
                                response.addListener('data', function (chunk) {
                                                dlprogress += chunk.length;
                                                            downloadfile.write(chunk, encoding='binary');
                                                                    });
                                        response.addListener("end", function() {
                                                        downloadfile.end();
                                                                    sys.puts("Finished downloading " + filename);
                                                                            });

                                            });

