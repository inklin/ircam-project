var gulp = require('gulp'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-ruby-sass');

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function(){
  return sass('./sass', {style: 'expanded'})
      .pipe(gulp.dest('./styles'))
      .pipe(connect.reload());
});

gulp.task('html', function(){
  gulp.src('./*.html')
      .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['sass', 'connect', 'watch']);

