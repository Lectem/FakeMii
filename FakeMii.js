var http = require('http');
var fs   = require('fs');

http.createServer(function (client_req, response) {
  console.log('serving: ' + client_req.url);
  if(client_req.url == "http://conntest.nintendowifi.net/")
	sendConnTestPage(response);
  else send404(response);
}).listen(3000);
console.log('Server running on port 3000/');


function sendConnTestPage(response){
  response.writeHead(200, {
  'Content-Type'	: 'text/html',
  'connection'		: 'keep-alive',
  'Server'			: 'BigIP',
  'X-Organization'	: 'Nintendo'});
  fs.readFile('./conntest.html',function(err,data){
    response.end(data);
  });
  console.log('served conntest.html');
}

function send404(response){
  response.writeHead(404, {"Content-Type": "text/plain"});
  response.write("404 Not Found\n");
  response.end();
}