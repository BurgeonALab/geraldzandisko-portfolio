const path = require('path')
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
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
		new MiniCssExtractPlugin({
			filename: "gerraour.css",
		}),
	],
	entry: {
		index: './src/js/index.js',
	},
	output: {
		filename: 'gerraour.bundle.js',
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
						loader: MiniCssExtractPlugin.loader,
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
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		],
	},
	devtool: 'eval-source-map',
}
