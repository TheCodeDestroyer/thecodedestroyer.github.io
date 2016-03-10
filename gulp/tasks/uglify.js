var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    paths = require('../paths');

gulp.task('minifyMain', function () {
    'use strict';

    return gulp.src('./src/js/main.js')
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.output + 'js'));
});

gulp.task('minifyJsLibs', function () {
    'use strict';

    return gulp.src([
        './jspm_packages/github/jquery/jquery@1.11.1/dist/jquery.js',
        './jspm_packages/github/twbs/bootstrap@3.3.6/js/bootstrap.js',
        './jspm_packages/github/gdsmith/jquery.easing@1.3.2/jquery.easing.js',
        './jspm_packages/github/jquery/jquery-mousewheel@3.1.13/jquery.mousewheel.js',
        './jspm_packages/github/TheCodeDestroyer/jquery-nicescroll@1.0.1/jquery.nicescroll.min.js',
        './jspm_packages/github/TheCodeDestroyer/jquery-nicescroll@1.0.1/jquery.nicescroll.plus.js',
        './jspm_packages/github/imakewebthings/jquery-waypoints@2.0.5/waypoints.js',
        './jspm_packages/github/gilbitron/Nivo-Lightbox@1.2.0/nivo-lightbox.js',
        './jspm_packages/github/stevenwanderski/bxslider-4@4.2.5/dist/jquery.bxslider.js',
        './jspm_packages/github/jamesallardice/Placeholders.js@4.0.1/dist/placeholders.jquery.js',
        './jspm_packages/github/crucifyer/css-browser-selector@master/css_browser_selector.js'
    ])
    .pipe(uglify())
    .pipe(concat('libBundle.min.js'))
    .pipe(gulp.dest(paths.output + 'js'));
});

gulp.task('minifyAltJsLibs', function () {
    'use strict';

    return gulp.src([
        './jspm_packages/github/aFarkas/html5shiv@3.7.3/dist/html5shiv.js',
        './jspm_packages/github/scottjehl/Respond@1.4.2/respond.js'
    ])
    .pipe(rename('altLibBundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.output + 'js'));
});