const gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    friendlyFormatter = require('eslint-friendly-formatter');

gulp.task('eslint', function() {
    return gulp.src([
        'gulp/aliases.js'
    ])
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format(friendlyFormatter))
    .pipe(eslint.failOnError());
});
