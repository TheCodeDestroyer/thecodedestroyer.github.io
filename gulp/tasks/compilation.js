var gulp = require('gulp'),
    changed = require('gulp-changed'),
    plumber = require('gulp-plumber'),
    to5 = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    paths = require('../paths'),
    compilerOptions = require('../babelOptions'),
    assign = Object.assign || require('object.assign'),
    notify = require('gulp-notify');

gulp.task('transpileSystem', function() {
    return gulp.src(paths.source)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(changed(paths.output, { extension: '.js' }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(to5(assign({}, compilerOptions, { modules: 'system' })))
    .pipe(sourcemaps.write({ includeContent: true }))
    .pipe(gulp.dest(paths.output));
});