var gulp = require('gulp'),
    inject = require('gulp-inject'),
    paths = require('../paths');

gulp.task('injectStyles', function () {
    'use strict';

    return gulp.src('./gulp/data/head.html')
        .pipe(inject(gulp.src([
                paths.temp + 'css/libBundle.min.css',
                paths.temp + 'css/main.min.css'
            ]),
            {
                starttag: '/*inject:theme:{{ext}}*/',
                endtag: '/*endinject*/',
                transform: function (filePath, file) {
                    return file.contents.toString('utf8');
                }
            }))
        .pipe(gulp.dest('./_includes/main'));
});
