var gulp = require('gulp');
var gzip = require('gulp-gzip');

gulp.task('compress', function() {
  gulp.src(['./dist/*.js', './dist/*.css'])
    .pipe(gzip())
    .pipe(gulp.dest('./dist'));
});
