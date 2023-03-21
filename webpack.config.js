const path = require('path')
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    experiments: {
        topLevelAwait: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],
    entry: {
        home: './public/src/js/home.js',
        policies: './public/src/js/policies.js',
        notfound: './public/src/js/notfound.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './public/dist'),
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
