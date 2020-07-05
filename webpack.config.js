const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	// mode: "development",
	mode: "production",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			},
			{
				test: /\.(jpg|png|jpe?g|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: 'img',
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.php$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: 'data',
							name: '[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		}),
		new HtmlWebpackPlugin({
			template: "./src/menu.html",
			filename: "menu.html"
		}),
		new HtmlWebpackPlugin({
			template: "./src/kitchen.html",
			filename: "kitchen.html"
		}),
		new HtmlWebpackPlugin({
			template: "./src/waiting.html",
			filename: "waiting.html"
		}),
		new HtmlWebpackPlugin({
			template: "./src/waiter.html",
			filename: "waiter.html"
		})
	]
}