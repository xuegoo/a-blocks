const webpack = require('webpack');
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const PLUGINS = [];
if (process.env.NODE_ENV === 'production') {
  PLUGINS.push(new UglifyJsPlugin());
}

module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  plugins: PLUGINS,
  devServer: {
    disableHostCheck: true
  },
  module: {
    rules: [
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["url-loader"] },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ["url-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(html|hbs)$/, use: ["html-loader"] },
      { test: /\.(txt|xml|block)$/, use: ["raw-loader"] }
    ]
  }
};