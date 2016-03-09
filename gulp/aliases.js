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
        'imgMin',
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

gulp.task('concat', function(done) {
    'use strict';

    runSequence(
        'concatJsLibs',
        'concatCssLibs',
        done
    );
});

gulp.task('copy', function(done) {
    'use strict';

    runSequence(
        'copyNivoLightBoxImages',
        'copyFontLibs',
        'copyJsLibs',
        done
    );
});