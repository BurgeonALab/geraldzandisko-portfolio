const path = require('path')

module.exports = {
    entry: './public/src/js/index.js',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
}
