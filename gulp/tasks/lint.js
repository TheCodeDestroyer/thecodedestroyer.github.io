//noinspection Eslint
var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    friendlyFormatter = require('eslint-friendly-formatter'),
    paths = require('../paths');

gulp.task('eslint', function() {
    return gulp.src(paths.source)
    .pipe(eslint('.eslintrc'))
    .pipe(eslint.format(friendlyFormatter))
    .pipe(eslint.failOnError());
});
