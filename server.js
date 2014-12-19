var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Azure Website!\n This is make from Node.js \n Let's try changing something ^^ ');
}).listen(port);