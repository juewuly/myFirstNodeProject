var http = require("http");
var url = require("url");

function start(route, handle) {
    function oneRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        route(handle, pathname, response);

        // response.writeHead(200, {"Content-Type": "text/plain"});
        // var content =  route(handle, pathname);
        // response.write(content);
        // response.end();
    }

    http.createServer(oneRequest).listen(8888);
    console.log('server has started.');
}

exports.start = start;
