var appRoot = './src/',
    outputRoot = './assets/',
    gulpRoot = './gulp/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    sass: appRoot + 'sass/styles.scss',
    output: outputRoot,
    doc: './doc',
    gulp: gulpRoot + '**/*.js'
};
