const path = require('path');
const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackEnvironment = require('./webpack/webpack.environment');

const templateFiles = fs
  .readdirSync(webpackEnvironment.paths.source)
  .filter((file) => path.extname(file).toLowerCase() === '.html');

const htmlPluginEntries = templateFiles.map(
  (template) =>
    new HTMLWebpackPlugin({
      inject: true,
      hash: false,
      filename: template,
      template: path.resolve(webpackEnvironment.paths.source, template),
    })
);

module.exports = {
  entry: {
    ueli: path.resolve(webpackEnvironment.paths.source, 'index.js'),
  },
  output: {
    filename: '[name].js',
    path: webpackEnvironment.paths.output,
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['*.js', '*.js.map'],
    }),
  ].concat(htmlPluginEntries),
  target: 'web',
};
