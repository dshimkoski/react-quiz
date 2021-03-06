const Dotenv = require('dotenv-webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin')

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: { minimize: true }
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new Dotenv({
      path: './config/.' + process.env.NODE_ENV + '.env'
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new BaseHrefWebpackPlugin({
      baseHref: process.env.NODE_ENV === 'dev' ? '/' : '/react-quiz/'
    })
  ]
}
