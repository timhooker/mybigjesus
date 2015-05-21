// php and php:release build the php and ejs files
var gulp = require('gulp'),
    addsrc = require('gulp-add-src'),
    connect = require('gulp-connect'),
    config = require('../config');

gulp.task('php', function() {
  return buildphp();
});

gulp.task('php:release', function () {
  return buildphp();
});

function buildphp() {

  return gulp.src(config.src.ejs)
    .pipe(addsrc(config.src.php))
    .pipe(gulp.dest(config.dest.php))
    .pipe(connect.reload());
}
