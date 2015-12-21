/* eslint dot-location:0*/
/* eslint valid-jsdoc:0*/
/* eslint no-console:0 */
/* eslint prefer-arrow-callback:0 */

/**
 * Gulp task definitions.
 */
var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('default', function() {

});

gulp.task('build', function() {

});

gulp.task('test', function() {

});

function jsFileStream() {
  if (jsFileStream.stream) {
    return jsFileStream.stream;
  }

  jsFileStream.stream = gulp.src([
    './*.js',
    './casper/*.js',
    './components/**/*.js',
    './lib/*.js',
    './lib/**/*.js',
    './utils/*.js',
    './test/*.js',
    // Not these files.
    '!./lib/vendor/*.js'
  ]);

  return jsFileStream.stream;
}

gulp.task('lint', function() {
  return jsFileStream()
		.pipe(eslint())
		.pipe(eslint.formatEach())
		.pipe(eslint.failOnError());
});
