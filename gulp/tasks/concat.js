var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('concat', function () {
    'use strict';

    return gulp.src([
        './src/lib/js/jquery.min.js',
        './src/lib/js/bootstrap.min.js',
        './src/lib/js/jquery.easing.min.js',
        './src/lib/js/jquery.mousewheel.min.js',
        './src/lib/js/jquery.nicescroll.min.js',
        './src/lib/js/jquery.nicescroll.plus.js',
        './src/lib/js/waypoints.min.js',
        './src/lib/js/nivo-lightbox.min.js',
        './src/lib/js/jquery.bxslider.min.js',
        './src/lib/js/placeholders.jquery.min.js',
        './src/lib/js/css_browser_selector.min.js'
    ])
    .pipe(concat('libBundle.min.js'))
    .pipe(gulp.dest('assets/js'));
});
