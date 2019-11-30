const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [{
	entry: './client/scripts/index.js',
	output: {
		path: path.resolve(__dirname, './static/scripts')
	},
	target: 'web',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										browsers: [
											'> 0.25%', 'last 2 versions', 'Firefox ESR', 'ie 9'
										]
									}
								}
							]
						]
					}
				}]
			}
		]
	}
}, {
	entry: './client/styles/index.scss',
	output: {
		path: path.resolve(__dirname, './static/styles')
	},
	target: 'web',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
}];
