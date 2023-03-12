const path = require('path')

module.exports = {
    entry: './public/src/js/index.js',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, './public/dist'),
        port: 8080,
        hot: true
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'eval-source-map',
}
