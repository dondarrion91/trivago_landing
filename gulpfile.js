var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/components/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    
    .pipe(gulp.dest('./src/components/css'));
});
 

gulp.task('sass:watch', function() {
    gulp.watch('./src/components/scss/**/*.scss', gulp.series('sass'));
});