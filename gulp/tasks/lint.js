var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    friendlyFormatter = require('eslint-friendly-formatter');

gulp.task('eslint', function() {
    return gulp.src([
        'src/**/*.js',
        '!gulp/**/*.js'
    ])
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format(friendlyFormatter))
    .pipe(eslint.failOnError());
});
