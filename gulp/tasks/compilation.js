var gulp = require('gulp'),
    sass = require('gulp-sass'),
    paths = require('../paths');

gulp.task('sass', function () {
    'use strict';

    return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.output + 'css'));
});