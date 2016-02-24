var appRoot = './src/',
    outputRoot = './build/',
    gulpRoot = './gulp/';

module.exports = {
    root: appRoot,
    lib: appRoot + 'lib/',
    source: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    sass: appRoot + 'sass/styles.scss',
    output: outputRoot,
    doc: './doc',
    gulp: gulpRoot + '**/*.js'
};
