// Load plugins
const gulp = require("gulp");

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function (cb) {

  // Bootstrap
  gulp.src([
    './node_modules/bootstrap/dist/**/*',
    //'!./node_modules/bootstrap/dist/css/bootstrap-grid*',
    //'!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
  ])
    .pipe(gulp.dest('./assets/vendor/bootstrap'));

  // fontawesome
  gulp.src([
    './node_modules/@fortawesome/fontawesome-free/js/**/*'
  ])
    .pipe(gulp.dest('./assets/vendor/fontawesome'));

  // octicons
  gulp.src([
    './node_modules/@primer/octicons/build/**/*'
  ])
    .pipe(gulp.dest('./assets/vendor/octicons'));


  // aos
  gulp.src([
    './node_modules/aos/dist/**/*'
  ])
    .pipe(gulp.dest('./assets/vendor/aos'));

  // jQuery
  gulp.src([
    './node_modules/jquery/dist/*'
  ])
    .pipe(gulp.dest('./assets/vendor/jquery'));

  // katex
  gulp.src([
    './node_modules/katex/dist/**/*'
  ])
    .pipe(gulp.dest('./assets/vendor/katex'));

  // mathjax
  gulp.src([
    './node_modules/mathjax/es5/**/*'
  ])
    .pipe(gulp.dest('./assets/vendor/mathjax'));

  cb();

  // lunr
  gulp.src([
    './node_modules/lunr/*.js'
  ])
    .pipe(gulp.dest('./assets/vendor/lunr'));

  cb();

});

gulp.task("default", gulp.parallel('vendor'));
