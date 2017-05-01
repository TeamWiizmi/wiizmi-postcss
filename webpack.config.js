const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ]
        })
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ExtractTextPlugin({filename: 'index.css', allChunks: true}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'views/index.pug'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9001
  }
};