var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(done) {
    'use strict';

    runSequence(
        'jshint',
        'sass',
        'copy',
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
        'copyFontLibs',
        'copyJsLibs',
        done
    );
});