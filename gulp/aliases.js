var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(done) {
    'use strict';

    runSequence(
        'jshint',
        'sass',
        'copy',
        'uglify',
        'concat',
        done
    );
});

gulp.task('lint', function(done) {
    'use strict';

    runSequence(
        'jshint',
        done
    );
});

gulp.task('copy', function(done) {
    'use strict';

    runSequence(
        'copyCssLibs',
        'copyNivoLightBoxImages',
        'copyFontLibs',
        'copyJsLibs',
        done
    );
});