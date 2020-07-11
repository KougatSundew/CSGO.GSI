import { createServer, IncomingMessage, ServerResponse, request } from 'http';

const port = 3000;
const host = '192.168.1.14';
const server = createServer((request: IncomingMessage, response: ServerResponse) => {

    if(request.method == 'POST') {
        console.log("Handling POST request...");
        response.writeHead(200, {'Content-Type': 'text/html'});

        var body = '';
        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {
            console.log("POST payload: " + body);
            response.end('');
        });
    }
    else
    {
        console.log("Not expecting other request types...");
        response.writeHead(200, {'Content-Type': 'text/html'});
		var html = '<html><body>HTTP Server at http://' + host + ':' + port + '</body></html>';
        response.end(html);
    }



});
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);