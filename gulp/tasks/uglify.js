var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    paths = require('../paths');

gulp.task('uglify', function () {
    'use strict';

    return gulp.src('./src/js/main.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest(paths.output + 'js'));
});
