//noinspection Eslint

var appRoot = './src/',
    outputRoot = './build/',
    gulpRoot = './gulp/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    sass: appRoot + 'sass/**/*.scss',
    output: outputRoot,
    doc: './doc',
    gulp: gulpRoot + '**/*.js'
};
