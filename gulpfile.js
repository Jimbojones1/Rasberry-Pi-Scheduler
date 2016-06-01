// Gulpfile
// ========
// Development and deployment tasks
var gulp  = require('gulp'),
    gls   = require('gulp-live-server');


// Server
// ------
// Run a local Express server
gulp.task('server', function() {
  var server = gls('./server/index.js')
});
