var gulp = require('gulp'),
    paths = require('../paths');

gulp.task('copyFontLibs', function () {
    'use strict';

    return gulp.src('./jspm_packages/github/FortAwesome/Font-Awesome@4.5.0/fonts/*')
    .pipe(gulp.dest(paths.output + 'fonts'));
});

gulp.task('copyNivoLightBoxImages', function () {
    'use strict';

    return gulp.src([
        './jspm_packages/github/gilbitron/Nivo-Lightbox@1.2.0/themes/default/close.png',
        './jspm_packages/github/gilbitron/Nivo-Lightbox@1.2.0/themes/default/loading.gif',
        './jspm_packages/github/gilbitron/Nivo-Lightbox@1.2.0/themes/default/next.png',
        './jspm_packages/github/gilbitron/Nivo-Lightbox@1.2.0/themes/default/prev.png'

    ])
    .pipe(gulp.dest(paths.root));
});
