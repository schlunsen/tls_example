var tls = require('tls'),
    fs = require('fs');


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var options = {
  key: fs.readFileSync('keys/private-key.pem'),
  cert: fs.readFileSync('keys/public-cert.pem'),
  rejectUnhauthorized : false
};

var conn = tls.connect(8000, options, function() {
  if (conn.authorized) {
    console.log("Connection authorized by a Certificate Authority.");
  } else {
    console.log("Connection not authorized: " + conn.authorizationError)
  }
    console.log();
});



conn.on("data", function (data) {
  console.log(data.toString());
  conn.end();
});