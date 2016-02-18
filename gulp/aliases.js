const gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('lint', function(done) {
    runSequence(
        'eslint',
        done
    );
});
