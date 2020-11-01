// Load plugins
const gulp = require("gulp");

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function(cb) {

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      //'!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      //'!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./assets/vendor/bootstrap'))

  // fontawesome
  gulp.src([
    './node_modules/@fortawesome/fontawesome-free/js/**/*'
  ])
  .pipe(gulp.dest('./assets/vendor/fontawesome'))

  // aos
  gulp.src([
    './node_modules/aos/dist/**/*'
  ])
  .pipe(gulp.dest('./assets/vendor/aos'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./assets/vendor/jquery'))

  cb();

});

gulp.task("default", gulp.parallel('vendor'));