const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
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
		new CopyPlugin({
			patterns: [
				{ from: "./public/favicon", to: "favicon" },
				{ from: "./public/robots.txt", to: "robots.txt" },
				{ from: "./public/sitemap.xml", to: "sitemap.xml" },
				{ from: "./public/ads.txt", to: "ads.txt" },
				{ from: "./public/images", to: "images" },
			],
		}),
		new MiniCssExtractPlugin({
			filename: "gerraour.css",
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new HtmlWebpackPlugin({
			template: './public/404.html',
			filename: './404.html',
		}),
		new HtmlWebpackPlugin({
			template: './public/cookie-policy.html',
			filename: './cookie-policy.html',
		}),
		new HtmlWebpackPlugin({
			template: './public/privacy-policy.html',
			filename: './privacy-policy.html',
		}),
		new HtmlWebpackPlugin({
			template: './public/terms-and-conditions.html',
			filename: './terms-and-conditions.html',
		}),
	],
	entry: {
		index: './src/js/index.js',
	},
	output: {
		filename: 'gerraour.bundle.js',
		path: path.resolve(__dirname, './dist'),
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
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin(),
		],
	},
	devtool: 'eval-source-map',
}
