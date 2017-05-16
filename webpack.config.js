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
          ]
        })
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ExtractTextPlugin({filename: 'index.css'}),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'views/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'article.html',
      template: 'views/article.pug'
    })

  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9001
  }
};