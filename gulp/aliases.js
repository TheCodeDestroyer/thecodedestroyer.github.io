var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('lint', function(done) {
    'use strict';

    runSequence(
        'jshint',
        done
    );
});
