// ================ Base Setup ========================
// Include Hapi package
var Hapi = require('hapi');

// Create Server Object
var server = new Hapi.Server();

// Define PORT number
server.connection({port: 7002});

server.register([{
  register: require('./core')
}], error => {
  if (error) {
      console.log('Error: ', error);
  } else {
    // =============== Start our Server =======================
    // Lets start the server
    server.start(function () {
        console.log('Server running at:', server.info.uri);
    });

  }
});
// Register Swagger Plugin ( Use for documentation and testing purpose )
server.register({
    register: require('hapi-swagger'),
    options: {
        apiVersion: "0.0.1"
    }
}, function (err) {
    if (err) {
        server.log(['error'], 'hapi-swagger load error: ' + err)
    } else {
        server.log(['start'], 'hapi-swagger interface loaded')
    }
});
