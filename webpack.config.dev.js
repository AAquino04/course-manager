const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Important so Babel knows we're in dev mode
process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  target: 'web',
  devTool: 'cheap-module-source-map',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    stats: 'minimal', // Mininal output when running
    overlay: true, // Overlay errors in the browser
    historyApiFallBack: true, // all requests are sent to index
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Look for js and jsx files
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css)$/, // Look for css files
        use: ["style-loader", "css-loader"] // Enables CSS import
      }
    ]
  }
}
