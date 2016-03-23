var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    res.writeHead(200, {"Content-Type":"text/html"});
    if('prenom' in params && 'nom' in params) {
        res.write('Salut' + params['prenom'] + ' ' + params['nom']);
    }
    else {
        res.write('Salut l\'inconnue');
    }
    res.end();

});

server.listen(8080);