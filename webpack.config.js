const path = require('path')

module.exports = {
    entry: './public/src/js/index.js',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    performance: {
        hints: false,
    },
    devtool: 'eval-source-map',
}
