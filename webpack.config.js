const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;
// const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const filename = ext => `[name].${ext}`;


module.exports = {
	mode: 'development',  
	entry: './src/index.js',
	// output: {
	// 	filename: './public/bundle.[hash].js'
	// },
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'build')
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
		{
			test: /\.(js)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		},
		{
			test: /\.(scss|css)$/,
			exclude: /node_modules/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'build/index.html',
			favicon: 'build/favicon.ico'
		})
	],
	devServer: {
		host: 'localhost',
		port: port,
		historyApiFallback: true,
		open: true
	}
};