var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('jshint', function () {
    'use strict';

    return gulp.src([
            'gulpfile.js',
            'gulp/**/*.js',
            'src/js/**/*.js'
        ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }))
        .pipe(jshint.reporter('fail'));
});
