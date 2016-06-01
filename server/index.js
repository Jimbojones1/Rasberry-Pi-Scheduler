// Server
// ======
// Main server startup script

// Require dependencies
// --------------------
var express = require('express'),
    app     = express();


// Configure app
// -------------


// Initialize middleware
// ---------------------


// Start the server
// ----------------
var server = app.listen(process.env.PORT, function() {
  console.log('App is listening at http://localhost:' + server.address().port);
});
