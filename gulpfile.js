var gulp = require('gulp');

var copy = require('gulp-copy');

var filesToCopy = {
    css: './bower_components/bootstrap/dist/css/bootstrap.min.css'
};

gulp.task('styles', function() {
    gulp.src(filesToCopy.css)
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', ['styles']);
