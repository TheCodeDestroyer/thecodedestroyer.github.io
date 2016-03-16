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
    .pipe(gulp.dest(paths.temp + 'js'));
});

gulp.task('minifyJsLibs', function () {
    'use strict';

    return gulp.src('./jspm_packages/github/TheCodeDestroyer/jquery-nicescroll@1.0.1/jquery.nicescroll.plus.js')
    .pipe(uglify())
    .pipe(gulp.dest(paths.temp + 'js'));
});

gulp.task('concatAndMinifyJs', function () {
    'use strict';

    return gulp.src([
        './jspm_packages/github/jquery/jquery@1.11.1/dist/jquery.min.js',
        './jspm_packages/github/twbs/bootstrap@3.3.6/js/bootstrap.min.js',
        './jspm_packages/github/gdsmith/jquery.easing@1.3.2/jquery.easing.min.js',
        './jspm_packages/github/jquery/jquery-mousewheel@3.1.13/jquery.mousewheel.min.js',
        './jspm_packages/github/TheCodeDestroyer/jquery-nicescroll@1.0.1/jquery.nicescroll.min.js',
        paths.temp + 'js/jquery.nicescroll.plus.min.js',
        './jspm_packages/github/imakewebthings/jquery-waypoints@2.0.5/waypoints.min.js',
        './jspm_packages/github/gilbitron/Nivo-Lightbox@1.2.0/nivo-lightbox.min.js',
        './jspm_packages/github/stevenwanderski/bxslider-4@4.2.5/dist/jquery.bxslider.min.js',
        './jspm_packages/github/jamesallardice/Placeholders.js@4.0.1/dist/placeholders.jquery.min.js',
        './jspm_packages/github/crucifyer/css-browser-selector@master/css_browser_selector.min.js',
        paths.temp + 'js/main.min.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
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