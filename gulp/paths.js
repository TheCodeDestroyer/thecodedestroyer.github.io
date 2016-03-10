var appRoot = './src/',
    outputRoot = './assets/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    sassTheme: appRoot + 'sass/theme/',
    sassFa: appRoot + 'sass/fa/',
    output: outputRoot,
    temp: './temp/'
};
