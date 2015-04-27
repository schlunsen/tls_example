var tls = require('tls'),
    fs = require('fs'),
    msg = [
            "WELCOME"
          ];

var options = {
  key: fs.readFileSync('keys/private-key.pem'),
  cert: fs.readFileSync('keys/public-cert.pem')
};

tls.createServer(options, function (s) {
  s.write(msg+"\n");

  s.pipe(s);
  s.on('data', function(data){
    console.log("DATA from client", data.toString());
  });
}).listen(8000);