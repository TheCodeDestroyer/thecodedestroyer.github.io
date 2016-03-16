var sourceRoot = './src/',
    outputRoot = './assets/',
    tempRoot = './temp/',
    webRoot = './';

module.exports = {
    source: sourceRoot,
    js: sourceRoot + '**/*.js',
    html: sourceRoot + '**/*.html',
    sassTheme: sourceRoot + 'sass/theme/',
    sassFa: sourceRoot + 'sass/fa/',
    output: outputRoot,
    temp: tempRoot,
    root: webRoot
};
