const path = require('path');

module.exports = {
	entry: './src/index.tsx',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	devServer: {
		index: 'index.html',
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		port: 1234
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
		alias: {
			'~': path.resolve(__dirname, './src/')
		}
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
