// console.log('hello world');
// console.error(new Error('error'));
// const name='gaurav'
// console.warn('warning: name is $(name)');

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8088);

//cmd- first.js
//browser- localhost:8080