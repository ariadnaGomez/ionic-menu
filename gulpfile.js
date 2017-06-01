// Load all gulp tasks
require ('./gulp/default.js');
require ('./gulp/sass.js');
require ('./gulp/watch.js');
require ('./gulp/install.js');
require ('./gulp/dist.js');
// require ('./gulp/createView.js');
var gulp = require ('gulp');

// function getTask(task) {
//     return require('./gulp/' + task);
// }

gulp.task('test', require ('./gulp/test.js')());
