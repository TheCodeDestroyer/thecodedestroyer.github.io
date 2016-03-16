var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    paths = require('../paths');

gulp.task('buildTheme', function() {
    'use strict';

    return gulp.src(paths.sassTheme + 'main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.sassTheme));
});

gulp.task('buildFontAwesome', function() {
    'use strict';

    return gulp.src([
        paths.sassFa + 'font-awesome.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.sassFa));
});

gulp.task('minifyTheme', function() {
    'use strict';

    return gulp.src(paths.sassTheme + 'main.css')
    .pipe(rename('main.min.css'))
    .pipe(cssnano({ discardComments: { removeAll: true } }))
    .pipe(gulp.dest(paths.temp + 'css'));
});

gulp.task('minifyCssLibs', function() {
    'use strict';

    return gulp.src([
        './jspm_packages/github/twbs/bootstrap@3.3.6/css/bootstrap.css',
        paths.sassFa + 'font-awesome.css',
        './jspm_packages/github/gilbitron/Nivo-Lightbox@1.2.0/nivo-lightbox.css',
        './jspm_packages/github/gilbitron/Nivo-Lightbox@1.2.0/themes/default/default.css',
        './jspm_packages/github/daneden/animate.css@3.5.1/animate.css'
    ])
    .pipe(concat('libBundle.min.css'))
    .pipe(cssnano({ discardComments: { removeAll: true } }))
    .pipe(gulp.dest(paths.temp + 'css'));
});

