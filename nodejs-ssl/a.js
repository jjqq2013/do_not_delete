const https = require('https');
const fs = require('fs');

const options = {
  // key: fs.readFileSync('ryans-key.pem'),
  // cert: fs.readFileSync('ryans-cert.pem')
  pfx: fs.readFileSync('ryans.pfx')
};

https.createServer(options, (req, res) => {
  console.log('url: ' + req.url);
  console.log('authorization: ' + req.headers['authorization']);
  res.end('return "PROXY aws.amazon.com:443"\n');
}).listen(8000);
