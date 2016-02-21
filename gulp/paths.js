var appRoot = './src/',
    outputRoot = './dist/',
    gulpRoot = './gulp/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    css: appRoot + '**/*.css',
    output: outputRoot,
    doc: './doc',
    gulp: gulpRoot + '**/*.js'
};
