var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

    var queryObject = url.parse(req.url, true).query;
    var cookieName = queryObject.cookieName
    var cookieValue = queryObject.cookieValue
    res.setHeader(cookieName, cookieValue);
    //res.writeHead(200, {'Content-Type': 'text/html'});
    for (header in res.getHeaders()) {
        var value = res.getHeaders()[header];
        res.write(`${header}: ${value}` + "\n");
    }
    res.end();
}).listen(2300);