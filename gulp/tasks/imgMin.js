var gulp = require('gulp'),
    imageMin = require('gulp-imagemin'),
    pngQuant = require('imagemin-pngquant'),
    paths = require('../paths');

gulp.task('imgMin', function () {
    'use strict';

    return gulp.src('./src/img/**/*')
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngQuant()]
        }))
        .pipe(gulp.dest(paths.output + 'img'));
});
