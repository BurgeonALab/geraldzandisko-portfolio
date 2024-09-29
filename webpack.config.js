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
				{ from: "./public/favicon/safari-pinned-tab.svg", to: "favicon" },
				{ from: "./public/robots.txt", to: "robots.txt" },
				{ from: "./public/sitemap.xml", to: "sitemap.xml" },
				{ from: "./public/ads.txt", to: "ads.txt" },
				{ from: "./public/browserconfig.xml", to: "./" },
				{ from: "./public/site.webmanifest", to: "./" },
			],
		}),
		new MiniCssExtractPlugin({
			filename: "style/[name].gerraour.css",
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
			minify: true,
		}),
		new HtmlWebpackPlugin({
			template: './public/404.html',
			filename: './404.html',
			minify: true,
		}),
		new HtmlWebpackPlugin({
			template: './public/cookie-policy.html',
			filename: './cookie-policy.html',
			minify: true,
		}),
		new HtmlWebpackPlugin({
			template: './public/privacy-policy.html',
			filename: './privacy-policy.html',
			minify: true,
		}),
		new HtmlWebpackPlugin({
			template: './public/terms-and-conditions.html',
			filename: './terms-and-conditions.html',
			minify: true,
		}),
	],
	entry: {
		index: './src/js/index.js',
	},
	output: {
		filename: 'scripts/[name].gerraour.js',
		chunkFilename: 'scripts/[name].gerraour.js',
		path: path.resolve(__dirname, './dist/'),
		clean: true,
	},
	performance: {
		hints: false,
	},
	module: {
		rules: [
			{
				test: /\.(css)$/,
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
				]
			},
			{
				test: /\.(png|webp|jpe?g|gif|ico)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'favicon',
							name: '[name].[ext]',
						},
					},
				],
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
					compress: {
						drop_console: true,
					}
				},
				extractComments: false,
			}),
			new CssMinimizerPlugin(),
		],
	},
}
