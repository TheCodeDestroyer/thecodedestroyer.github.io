var gulp = require('gulp'),
    concat = require('gulp-concat'),
    paths = require('../paths');

gulp.task('concatJsLibs', function () {
    'use strict';

    return gulp.src([
        './jspm_packages/github/jquery/jquery@1.11.1/dist/jquery.min.js',
        './jspm_packages/github/twbs/bootstrap@3.3.6/js/bootstrap.min.js',
        './jspm_packages/github/gdsmith/jquery.easing@1.3.2/jquery.easing.min.js',
        './jspm_packages/github/jquery/jquery-mousewheel@3.1.13/jquery.mousewheel.min.js',
        './jspm_packages/github/TheCodeDestroyer/jquery-nicescroll@1.0.1/jquery.nicescroll.min.js',
        './jspm_packages/github/TheCodeDestroyer/jquery-nicescroll@1.0.1/jquery.nicescroll.plus.js',
        './jspm_packages/github/imakewebthings/jquery-waypoints@2.0.5/waypoints.min.js',
        './jspm_packages/github/gilbitron/Nivo-Lightbox@1.2.0/nivo-lightbox.min.js',
        './jspm_packages/github/stevenwanderski/bxslider-4@4.2.5/dist/jquery.bxslider.min.js',
        './jspm_packages/github/jamesallardice/Placeholders.js@4.0.1/dist/placeholders.jquery.min.js',
        './jspm_packages/github/crucifyer/css-browser-selector@master/css_browser_selector.min.js'
    ])
    .pipe(concat('libBundle.min.js'))
    .pipe(gulp.dest(paths.output + 'js'));
});

gulp.task('concatCssLibs', function () {
    'use strict';

    return gulp.src([
        './jspm_packages/github/twbs/bootstrap@3.3.6/css/bootstrap.min.css',
        './jspm_packages/github/FortAwesome/Font-Awesome@4.5.0/css/font-awesome.min.css',
        './jspm_packages/github/gilbitron/Nivo-Lightbox@1.2.0/nivo-lightbox.css',
        './jspm_packages/github/gilbitron/Nivo-Lightbox@1.2.0/themes/default/default.css',
        './jspm_packages/github/daneden/animate.css@3.5.1/animate.min.css'
    ])
    .pipe(concat('libBundle.min.css'))
    .pipe(gulp.dest(paths.output + 'css'));
});
