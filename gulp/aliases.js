var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(done) {
    'use strict';

    runSequence(
        'jshint',
        'css',
        'copy',
        'js',
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

gulp.task('js', function(done) {
    'use strict';

    runSequence(
        'minifyMain',
        'minifyJsLibs',
        'minifyAltJsLibs',
        'concatAndMinifyJs',
        done
    );
});

gulp.task('css', function(done) {
    'use strict';

    runSequence(
        'buildTheme',
        'buildFontAwesome',
        'minifyTheme',
        'minifyCssLibs',
        //'injectStyles',
        done
    );
});

gulp.task('copy', function(done) {
    'use strict';

    runSequence(
        'copyNivoLightBoxImages',
        'copyFontLibs',
        done
    );
});