var http = require("http");
var url = require("url");

function start(route, handle) {
    function oneRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');
        route(handle, pathname, response, request);
    }

    http.createServer(oneRequest).listen(8888);
    console.log('server has started.');
}

exports.start = start;
