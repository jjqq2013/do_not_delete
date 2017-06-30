const http = require('http');

http.createServer((req, res) => {
  console.log('url: ' + req.url);
  console.log('authorization: ' + req.headers['authorization']);
  res.end('return "PROXY aws.amazon.com:443"\n');
  // res.writeHead(200, 'text/plain');
  // res.write('Got request head. First response: ' + new Date() + '\n');
  // req.setEncoding('utf8');
  // req.on('data', s => {
  //   console.log(s);
  //   res.write('OK ' + s + '\n');
  // });
}).listen(8000);
