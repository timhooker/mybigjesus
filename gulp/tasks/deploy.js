// deploy pushes the contents of dist to ftp

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    ftp = require('gulp-ftp'),
    config = require('../config');

gulp.task('deploy', ['clean'], function () {
  return gulp.start('assets', 'html:release', 'bust-cache', 'ftp-push');
});

// gulp.task('push-gh-pages', ['assets', 'html:release', 'bust-cache'], function () {
//   return gulp.src(config.dest.root + '/**/*')
//     .pipe(deploy());
// });

gulp.task('ftp-push', ['assets', 'html:release', 'php:release', 'bust-cache'], function () {
    return gulp.src('dist/**/*')
        .pipe(ftp({
            host: 'timhookerdesign.com',
            port: 21,
            remotePath: '/upload'
        }))
        // you need to have some kind of stream after gulp-ftp to make sure it's flushed
        // this can be a gulp plugin, gulp.dest, or any kind of stream
        // here we use a passthrough stream
        .pipe(gutil.noop());
});
